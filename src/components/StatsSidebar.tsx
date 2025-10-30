import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsSidebarProps {
  monthlyPnL: number;
  yearlyPnL: number;
  currentMonth: string;
}

export const StatsSidebar = ({
  monthlyPnL,
  yearlyPnL,
  currentMonth,
}: StatsSidebarProps) => {
  const monthlyProfit = monthlyPnL > 0;
  const yearlyProfit = yearlyPnL > 0;

  return (
    <div className="space-y-4">
      {/* Monthly PnL */}
      <Card className="p-6 bg-gradient-to-br from-card to-background-secondary border-border/50">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{currentMonth}</span>
        </div>
        <div className="text-xs text-muted-foreground mb-1">This Month's Net Profit</div>
        <div className={cn(
          "text-3xl font-bold flex items-center gap-2",
          monthlyProfit ? "text-primary" : "text-destructive"
        )}>
          {monthlyProfit ? (
            <TrendingUp className="h-6 w-6" />
          ) : (
            <TrendingDown className="h-6 w-6" />
          )}
          ${Math.abs(monthlyPnL).toFixed(2)}
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          {monthlyProfit ? "Profit" : "Loss"}
        </div>
      </Card>

      {/* Yearly PnL */}
      <Card className="p-6 bg-gradient-to-br from-card to-background-secondary border-border/50">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">2025</span>
        </div>
        <div className="text-xs text-muted-foreground mb-1">This Year's Net Profit</div>
        <div className={cn(
          "text-3xl font-bold flex items-center gap-2",
          yearlyProfit ? "text-primary" : "text-destructive"
        )}>
          {yearlyProfit ? (
            <TrendingUp className="h-6 w-6" />
          ) : (
            <TrendingDown className="h-6 w-6" />
          )}
          ${Math.abs(yearlyPnL).toFixed(2)}
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          {yearlyProfit ? "Profit" : "Loss"}
        </div>
      </Card>

      {/* Stats summary */}
      <Card className="p-6 bg-gradient-to-br from-card to-background-secondary border-border/50">
        <h3 className="font-semibold mb-4 text-foreground">Quick Stats</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Trading Days</span>
            <span className="font-semibold text-foreground">12</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Win Rate</span>
            <span className="font-semibold text-primary">67%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Avg Trade</span>
            <span className="font-semibold text-foreground">$45.20</span>
          </div>
        </div>
      </Card>
    </div>
  );
};
