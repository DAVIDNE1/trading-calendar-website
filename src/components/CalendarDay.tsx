import { Trade } from "@/types/trading";
import { cn } from "@/lib/utils";

interface CalendarDayProps {
  date: number;
  isCurrentMonth: boolean;
  trades: Trade[];
  dailyPnL: number;
  onClick: () => void;
}

export const CalendarDay = ({
  date,
  isCurrentMonth,
  trades,
  dailyPnL,
  onClick,
}: CalendarDayProps) => {
  const hasProfit = dailyPnL > 0;
  const hasLoss = dailyPnL < 0;

  return (
    <div
      onClick={onClick}
      className={cn(
        "min-h-[120px] rounded-lg p-3 transition-all duration-200 cursor-pointer",
        "bg-gradient-to-b from-card to-background-secondary",
        "hover:shadow-md hover:scale-[1.02]",
        "border border-border/50",
        !isCurrentMonth && "opacity-40"
      )}
    >
      {/* Date number */}
      <div className="text-sm font-medium text-muted-foreground mb-2">
        {date}
      </div>

      {/* Daily PnL */}
      {dailyPnL !== 0 && (
        <div
          className={cn(
            "text-xs font-semibold mb-2",
            hasProfit && "text-primary",
            hasLoss && "text-destructive"
          )}
        >
          {hasProfit ? "+" : ""}${dailyPnL.toFixed(2)}
        </div>
      )}

      {/* Trade chips */}
      <div className="space-y-1.5">
        {trades.slice(0, 2).map((trade, index) => (
          <div
            key={index}
            className={cn(
              "text-xs px-2 py-1 rounded flex items-center gap-1.5",
              "truncate",
              trade.type === "crypto"
                ? "bg-secondary/10 text-secondary"
                : "bg-accent/10 text-accent"
            )}
          >
            <span className="font-medium">{trade.symbol}</span>
            <span className="text-[10px] opacity-75">·</span>
            <span className={cn(
              "font-semibold",
              trade.pnl > 0 ? "text-primary" : "text-destructive"
            )}>
              {trade.pnl > 0 ? "+" : ""}${Math.abs(trade.pnl)}
            </span>
          </div>
        ))}
        {trades.length > 2 && (
          <div className="text-[10px] text-muted-foreground text-center">
            +{trades.length - 2} more
          </div>
        )}
      </div>
    </div>
  );
};
