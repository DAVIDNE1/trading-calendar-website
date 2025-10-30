export interface Trade {
  id: string;
  symbol: string;
  type: "crypto" | "futures";
  side: "Long" | "Short";
  entry: number;
  exit: number;
  size: number;
  pnl: number;
  notes?: string;
  date: string;
}

export interface LimitOrder {
  id: string;
  symbol: string;
  side: "Long" | "Short";
  triggerPrice: number;
  expirationDate: string;
  status: "pending" | "triggered" | "canceled";
  date: string;
}

export interface Reminder {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  isDone: boolean;
  isRecurring: boolean;
  recurringPattern?: "daily" | "weekly" | "monthly";
}

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  date: string;
}

export interface EconomicEvent {
  id: string;
  name: string;
  time: string;
  currency: string;
  impact: "high" | "medium" | "low";
  date: string;
}

export interface Friend {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "offline";
  visibility: "visible" | "hidden";
  todayPnL?: number;
  monthlyPnL?: number;
  tradingStyle?: string;
}

export interface DeletedTrade {
  trade: Trade;
  deletedAt: string;
}

export interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  trades: Trade[];
  dailyPnL: number;
}
