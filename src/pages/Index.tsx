import { useState, useMemo } from "react";
import { CalendarHeader } from "@/components/CalendarHeader";
import { CalendarGrid } from "@/components/CalendarGrid";
import { StatsSidebar } from "@/components/StatsSidebar";
import { DayDetailModal } from "@/components/DayDetailModal";
import { sampleTrades } from "@/data/sampleTrades";
import { Trade } from "@/types/trading";
import { ArrowLeft, BarChart3, Calendar, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1)); // October 2025
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentMonthName = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const days = [];

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: daysInPrevMonth - i,
        isCurrentMonth: false,
        trades: [] as Trade[],
        dailyPnL: 0,
      });
    }

    // Current month days
    for (let date = 1; date <= daysInMonth; date++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
      const dayTrades = sampleTrades.filter(t => t.date === dateStr);
      const dailyPnL = dayTrades.reduce((sum, t) => sum + t.pnl, 0);

      days.push({
        date,
        isCurrentMonth: true,
        trades: dayTrades,
        dailyPnL,
      });
    }

    // Next month days to fill grid
    const remainingDays = 42 - days.length;
    for (let date = 1; date <= remainingDays; date++) {
      days.push({
        date,
        isCurrentMonth: false,
        trades: [] as Trade[],
        dailyPnL: 0,
      });
    }

    return days;
  }, [currentDate]);

  // Calculate stats
  const monthlyPnL = useMemo(() => {
    return sampleTrades
      .filter(t => t.date.startsWith(`${currentYear}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`))
      .reduce((sum, t) => sum + t.pnl, 0);
  }, [currentDate, currentYear]);

  const yearlyPnL = useMemo(() => {
    return sampleTrades
      .filter(t => t.date.startsWith(`${currentYear}`))
      .reduce((sum, t) => sum + t.pnl, 0);
  }, [currentYear]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDayClick = (date: number) => {
    setSelectedDay(date);
  };

  const selectedDayData = useMemo(() => {
    if (selectedDay === null) return null;
    return calendarDays.find(d => d.date === selectedDay && d.isCurrentMonth);
  }, [selectedDay, calendarDays]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-secondary">
      {/* Top Navigation */}
      <nav className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Trading Dashboard</h1>
                <p className="text-sm text-muted-foreground">Track your performance</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                Overview
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Calendar className="h-4 w-4" />
                Calendar
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <FileText className="h-4 w-4" />
                Trade Log
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-2">Trading Calendar</h2>
          <p className="text-muted-foreground">Your daily trading activity and P&L</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Calendar Section */}
          <div>
            <CalendarHeader
              currentMonth={`${currentMonthName} ${currentYear}`}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
              onAddTrade={() => {}}
            />
            <CalendarGrid days={calendarDays} onDayClick={handleDayClick} />
          </div>

          {/* Stats Sidebar */}
          <StatsSidebar
            monthlyPnL={monthlyPnL}
            yearlyPnL={yearlyPnL}
            currentMonth={currentMonthName}
          />
        </div>
      </main>

      {/* Day Detail Modal */}
      {selectedDayData && (
        <DayDetailModal
          isOpen={selectedDay !== null}
          onClose={() => setSelectedDay(null)}
          date={selectedDay!}
          month={currentMonthName}
          trades={selectedDayData.trades}
          dailyPnL={selectedDayData.dailyPnL}
        />
      )}
    </div>
  );
};

export default Index;
