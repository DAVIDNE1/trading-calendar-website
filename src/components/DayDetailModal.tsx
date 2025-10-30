import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Trade, Note, Reminder, LimitOrder } from "@/types/trading";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Bell, BellRing, FileText, AlertCircle } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DayDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  date: number;
  month: string;
  trades: Trade[];
  notes?: Note[];
  reminders?: Reminder[];
  limitOrders?: LimitOrder[];
  dailyPnL: number;
  onEditTrade?: (trade: Trade) => void;
  onDeleteTrade?: (tradeId: string) => void;
}

export const DayDetailModal = ({
  isOpen,
  onClose,
  date,
  month,
  trades,
  notes = [],
  reminders = [],
  limitOrders = [],
  dailyPnL,
  onEditTrade,
  onDeleteTrade,
}: DayDetailModalProps) => {
  const hasProfit = dailyPnL > 0;
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [tradeToDelete, setTradeToDelete] = useState<string | null>(null);

  const handleDelete = (tradeId: string) => {
    setTradeToDelete(tradeId);
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = () => {
    if (tradeToDelete && onDeleteTrade) {
      onDeleteTrade(tradeToDelete);
      setDeleteConfirmOpen(false);
      setTradeToDelete(null);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              {month} {date}, 2025
            </DialogTitle>
          </DialogHeader>

          {/* Daily PnL Summary */}
          <div className="bg-gradient-to-br from-background to-background-secondary rounded-lg p-4 mb-4">
            <div className="text-sm text-muted-foreground mb-1">Daily P&L</div>
            <div className={cn(
              "text-3xl font-bold",
              hasProfit ? "text-primary" : "text-destructive"
            )}>
              {hasProfit ? "+" : ""}${dailyPnL.toFixed(2)}
            </div>
          </div>

          {/* Limit Orders */}
          {limitOrders.length > 0 && (
            <div className="space-y-3 mb-6">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-500" />
                Limit Orders ({limitOrders.length})
              </h3>
              {limitOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-yellow-50 border border-yellow-200 rounded-lg p-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{order.symbol}</div>
                      <div className="text-sm text-muted-foreground">
                        {order.side} @ ${order.triggerPrice}
                      </div>
                    </div>
                    <Badge variant={
                      order.status === "pending" ? "default" :
                      order.status === "triggered" ? "default" : "destructive"
                    }>
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Reminders */}
          {reminders.length > 0 && (
            <div className="space-y-3 mb-6">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                {reminders.some(r => r.isDone) ? (
                  <BellRing className="h-4 w-4 text-primary" />
                ) : (
                  <Bell className="h-4 w-4 text-muted-foreground" />
                )}
                Reminders ({reminders.length})
              </h3>
              {reminders.map((reminder) => (
                <div
                  key={reminder.id}
                  className={cn(
                    "bg-card border rounded-lg p-3",
                    reminder.isDone && "opacity-60"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{reminder.title}</div>
                      <div className="text-sm text-muted-foreground">{reminder.description}</div>
                      {reminder.time && (
                        <div className="text-xs text-muted-foreground mt-1">
                          {reminder.time}
                        </div>
                      )}
                    </div>
                    {reminder.isDone && (
                      <Badge className="bg-green-500">Done</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Notes */}
          {notes.length > 0 && (
            <div className="space-y-3 mb-6">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Notes ({notes.length})
              </h3>
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="bg-card border border-border/50 rounded-lg p-3"
                >
                  <div className="font-semibold text-foreground mb-1">{note.title}</div>
                  <div className="text-sm text-muted-foreground">{note.content}</div>
                  {note.tags.length > 0 && (
                    <div className="flex gap-1 mt-2">
                      {note.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Trades List */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Trades ({trades.length})</h3>
            {trades.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">
                No trades recorded for this day
              </p>
            ) : (
              trades.map((trade, index) => (
                <div
                  key={trade.id}
                  className="bg-card border border-border/50 rounded-lg p-4 hover:shadow-md transition-shadow relative"
                >
                  {/* Edit/Delete buttons */}
                  {onEditTrade && onDeleteTrade && (
                    <div className="absolute top-3 right-3 flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => onEditTrade(trade)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => handleDelete(trade.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-lg text-foreground">
                        {trade.symbol}
                      </span>
                      <Badge
                        variant={trade.type === "crypto" ? "default" : "secondary"}
                        className={cn(
                          trade.type === "crypto"
                            ? "bg-secondary/10 text-secondary hover:bg-secondary/20"
                            : "bg-accent/10 text-accent hover:bg-accent/20"
                        )}
                      >
                        {trade.type === "crypto" ? "Crypto" : "Futures"}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {trade.side}
                      </Badge>
                    </div>
                    <div className={cn(
                      "text-lg font-bold",
                      trade.pnl > 0 ? "text-primary" : "text-destructive"
                    )}>
                      {trade.pnl > 0 ? "+" : ""}${trade.pnl.toFixed(2)}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Entry:</span>
                      <span className="ml-2 font-medium text-foreground">
                        ${trade.entry.toFixed(2)}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Exit:</span>
                      <span className="ml-2 font-medium text-foreground">
                        ${trade.exit.toFixed(2)}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Size:</span>
                      <span className="ml-2 font-medium text-foreground">
                        {trade.size}
                      </span>
                    </div>
                  </div>
                  {trade.notes && (
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <p className="text-sm text-muted-foreground">{trade.notes}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action is irreversible. The trade will be deleted permanently.
              You can undo this with Ctrl+Z after deletion.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
