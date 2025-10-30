import { CalendarDay } from "./CalendarDay";
import { Trade } from "@/types/trading";

interface CalendarGridProps {
  days: Array<{
    date: number;
    isCurrentMonth: boolean;
    trades: Trade[];
    dailyPnL: number;
  }>;
  onDayClick: (date: number) => void;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const CalendarGrid = ({ days, onDayClick }: CalendarGridProps) => {
  return (
    <div className="bg-card rounded-xl shadow-sm p-6">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-4 mb-4">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-muted-foreground py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-4">
        {days.map((day, index) => (
          <CalendarDay
            key={index}
            date={day.date}
            isCurrentMonth={day.isCurrentMonth}
            trades={day.trades}
            dailyPnL={day.dailyPnL}
            onClick={() => day.isCurrentMonth && onDayClick(day.date)}
          />
        ))}
      </div>
    </div>
  );
};
