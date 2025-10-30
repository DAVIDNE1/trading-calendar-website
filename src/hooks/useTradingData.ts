import { useState, useCallback, useEffect } from "react";
import { Trade, Note, Reminder, LimitOrder, EconomicEvent, Friend, DeletedTrade } from "@/types/trading";
import { sampleTrades } from "@/data/sampleTrades";

export const useTradingData = () => {
  const [trades, setTrades] = useState<Trade[]>(sampleTrades);
  const [notes, setNotes] = useState<Note[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [limitOrders, setLimitOrders] = useState<LimitOrder[]>([]);
  const [economicEvents, setEconomicEvents] = useState<EconomicEvent[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [deletedTrades, setDeletedTrades] = useState<DeletedTrade[]>([]);
  const [lastDeletedTrade, setLastDeletedTrade] = useState<{ trade: Trade; deletedAt: string } | null>(null);

  // Save to localStorage
  useEffect(() => {
    const saved = localStorage.getItem("trading-journal-data");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.trades) setTrades(data.trades);
        if (data.notes) setNotes(data.notes);
        if (data.reminders) setReminders(data.reminders);
        if (data.limitOrders) setLimitOrders(data.limitOrders);
        if (data.economicEvents) setEconomicEvents(data.economicEvents);
        if (data.friends) setFriends(data.friends);
        if (data.deletedTrades) setDeletedTrades(data.deletedTrades);
      } catch (e) {
        console.error("Failed to load data from localStorage", e);
      }
    }
  }, []);

  // Save on changes
  useEffect(() => {
    localStorage.setItem("trading-journal-data", JSON.stringify({
      trades,
      notes,
      reminders,
      limitOrders,
      economicEvents,
      friends,
      deletedTrades,
    }));
  }, [trades, notes, reminders, limitOrders, economicEvents, friends, deletedTrades]);

  const addTrade = useCallback((trade: Omit<Trade, "id">) => {
    const newTrade: Trade = {
      ...trade,
      id: `trade-${Date.now()}`,
    };
    setTrades(prev => [...prev, newTrade]);
    return newTrade;
  }, []);

  const updateTrade = useCallback((id: string, updates: Partial<Trade>) => {
    setTrades(prev => prev.map(t => t.id === id ? { ...t, ...updates } : t));
  }, []);

  const deleteTrade = useCallback((id: string) => {
    const trade = trades.find(t => t.id === id);
    if (trade) {
      const deletedTrade: DeletedTrade = {
        trade,
        deletedAt: new Date().toISOString(),
      };
      setDeletedTrades(prev => [...prev, deletedTrade]);
      setLastDeletedTrade(deletedTrade);
      setTrades(prev => prev.filter(t => t.id !== id));
    }
  }, [trades]);

  const undoDelete = useCallback(() => {
    if (lastDeletedTrade) {
      setTrades(prev => [...prev, lastDeletedTrade.trade]);
      setDeletedTrades(prev => prev.filter(dt => dt.deletedAt !== lastDeletedTrade.deletedAt));
      setLastDeletedTrade(null);
    }
  }, [lastDeletedTrade]);

  const addNote = useCallback((note: Omit<Note, "id">) => {
    const newNote: Note = {
      ...note,
      id: `note-${Date.now()}`,
    };
    setNotes(prev => [...prev, newNote]);
    return newNote;
  }, []);

  const updateNote = useCallback((id: string, updates: Partial<Note>) => {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, ...updates } : n));
  }, []);

  const deleteNote = useCallback((id: string) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  }, []);

  const addReminder = useCallback((reminder: Omit<Reminder, "id">) => {
    const newReminder: Reminder = {
      ...reminder,
      id: `reminder-${Date.now()}`,
    };
    setReminders(prev => [...prev, newReminder]);
    return newReminder;
  }, []);

  const updateReminder = useCallback((id: string, updates: Partial<Reminder>) => {
    setReminders(prev => prev.map(r => r.id === id ? { ...r, ...updates } : r));
  }, []);

  const deleteReminder = useCallback((id: string) => {
    setReminders(prev => prev.filter(r => r.id !== id));
  }, []);

  const addLimitOrder = useCallback((order: Omit<LimitOrder, "id">) => {
    const newOrder: LimitOrder = {
      ...order,
      id: `order-${Date.now()}`,
    };
    setLimitOrders(prev => [...prev, newOrder]);
    return newOrder;
  }, []);

  const updateLimitOrder = useCallback((id: string, updates: Partial<LimitOrder>) => {
    setLimitOrders(prev => prev.map(o => o.id === id ? { ...o, ...updates } : o));
  }, []);

  const deleteLimitOrder = useCallback((id: string) => {
    setLimitOrders(prev => prev.filter(o => o.id !== id));
  }, []);

  const getTradesForDate = useCallback((date: string) => {
    return trades.filter(t => t.date === date);
  }, [trades]);

  const getNotesForDate = useCallback((date: string) => {
    return notes.filter(n => n.date === date);
  }, [notes]);

  const getRemindersForDate = useCallback((date: string) => {
    return reminders.filter(r => r.date === date);
  }, [reminders]);

  const getLimitOrdersForDate = useCallback((date: string) => {
    return limitOrders.filter(o => o.date === date);
  }, [limitOrders]);

  const getEconomicEventsForDate = useCallback((date: string) => {
    return economicEvents.filter(e => e.date === date);
  }, [economicEvents]);

  return {
    trades,
    notes,
    reminders,
    limitOrders,
    economicEvents,
    friends,
    deletedTrades,
    addTrade,
    updateTrade,
    deleteTrade,
    undoDelete,
    hasUndo: lastDeletedTrade !== null,
    addNote,
    updateNote,
    deleteNote,
    addReminder,
    updateReminder,
    deleteReminder,
    addLimitOrder,
    updateLimitOrder,
    deleteLimitOrder,
    getTradesForDate,
    getNotesForDate,
    getRemindersForDate,
    getLimitOrdersForDate,
    getEconomicEventsForDate,
  };
};



