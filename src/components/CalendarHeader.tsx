import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendarHeaderProps {
  currentMonth: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onAddTrade: () => void;
}

export const CalendarHeader = ({
  currentMonth,
  onPrevMonth,
  onNextMonth,
  onAddTrade,
}: CalendarHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevMonth}
          className="hover:bg-muted transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-2xl font-semibold text-foreground">{currentMonth}</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onNextMonth}
          className="hover:bg-muted transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      <Button
        onClick={onAddTrade}
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium gap-2"
      >
        <Plus className="h-4 w-4" />
        Add Trade
      </Button>
    </div>
  );
};
