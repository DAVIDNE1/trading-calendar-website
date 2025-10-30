import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trade } from "@/types/trading";
import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format, parseISO } from "date-fns";

interface EditTradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  trade: Trade | null;
  onSubmit: (tradeId: string, updates: Partial<Trade>) => void;
}

export const EditTradeModal = ({
  isOpen,
  onClose,
  trade,
  onSubmit,
}: EditTradeModalProps) => {
  const [symbol, setSymbol] = useState("");
  const [type, setType] = useState<"crypto" | "futures">("crypto");
  const [side, setSide] = useState<"Long" | "Short">("Long");
  const [entry, setEntry] = useState("");
  const [exit, setExit] = useState("");
  const [size, setSize] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    if (trade) {
      setSymbol(trade.symbol);
      setType(trade.type);
      setSide(trade.side);
      setEntry(trade.entry.toString());
      setExit(trade.exit.toString());
      setSize(trade.size.toString());
      setNotes(trade.notes || "");
      setDate(parseISO(trade.date));
    }
  }, [trade]);

  const handleSubmit = () => {
    if (!trade) return;

    const entryNum = parseFloat(entry);
    const exitNum = parseFloat(exit);
    const sizeNum = parseFloat(size);

    if (!symbol || !entry || !exit || !size) {
      alert("Please fill in all required fields");
      return;
    }

    const pnl = side === "Long" 
      ? (exitNum - entryNum) * sizeNum 
      : (entryNum - exitNum) * sizeNum;

    const dateStr = format(date, "yyyy-MM-dd");

    onSubmit(trade.id, {
      symbol,
      type,
      side,
      entry: entryNum,
      exit: exitNum,
      size: sizeNum,
      pnl,
      notes: notes || undefined,
      date: dateStr,
    });

    onClose();
  };

  if (!trade) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Edit Trade</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Date Selection */}
          <div className="space-y-2">
            <Label>Trade Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(d) => d && setDate(d)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Symbol */}
          <div className="space-y-2">
            <Label htmlFor="symbol">Symbol *</Label>
            <Input
              id="symbol"
              placeholder="e.g., BTCUSD, ETHUSD, US100"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value.toUpperCase())}
            />
          </div>

          {/* Type */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <Select value={type} onValueChange={(v) => setType(v as "crypto" | "futures")}>
                <SelectTrigger id="type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="crypto">Crypto</SelectItem>
                  <SelectItem value="futures">Futures/Options</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="side">Side</Label>
              <Select value={side} onValueChange={(v) => setSide(v as "Long" | "Short")}>
                <SelectTrigger id="side">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Long">Long</SelectItem>
                  <SelectItem value="Short">Short</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Entry/Exit */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="entry">Entry Price *</Label>
              <Input
                id="entry"
                type="number"
                step="0.01"
                placeholder="43200"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="exit">Exit Price *</Label>
              <Input
                id="exit"
                type="number"
                step="0.01"
                placeholder="43650"
                value={exit}
                onChange={(e) => setExit(e.target.value)}
              />
            </div>
          </div>

          {/* Size */}
          <div className="space-y-2">
            <Label htmlFor="size">Position Size *</Label>
            <Input
              id="size"
              type="number"
              step="0.1"
              placeholder="0.5"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Input
              id="notes"
              placeholder="Trade notes or strategy..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};



