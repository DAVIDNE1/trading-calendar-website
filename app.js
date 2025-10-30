// Symbol Lists
const cryptoSymbols = ['BTC', 'ETH', 'USDT', 'BNB', 'SOL', 'XRP', 'USDC', 'DOGE', 'ADA', 'AVAX', 'TRX', 'DOT', 'TON', 'LINK', 'MATIC', 'BCH', 'LTC', 'ICP', 'NEAR', 'ETC', 'UNI', 'APT', 'FIL', 'XMR', 'INJ', 'HBAR', 'VET', 'RNDR', 'TIA', 'AR', 'AAVE', 'MKR', 'QNT', 'IMX', 'ALGO', 'SUI', 'GRT', 'LDO', 'EGLD', 'CAKE', 'AXS', 'RUNE', 'FTM', 'SAND', 'THETA', 'MANA', 'FLOW', 'CHZ', 'XTZ', 'KAS', 'CRO', 'COMP', 'ZEC', 'DYDX', 'GALA', 'KAVA', 'MINA', 'OP', 'STX', 'CELO', 'ENS', 'ZIL', 'CRV', '1INCH', 'BAT', 'BTT', 'RPL', 'SNX', 'RVN', 'OCEAN', 'GMX', 'FXS', 'LRC', 'NEXO', 'MASK', 'ANKR', 'HOT', 'IOTX', 'COTI', 'ARDR', 'RSR', 'BAL', 'YFI', 'QTUM', 'ENJ', 'BLZ', 'OMG', 'MTL', 'WAVES', 'SRM', 'REEF', 'CELR', 'PERP', 'BAND', 'XEM', 'KNC', 'BEL', 'STORJ', 'CKB', 'DENT', 'SC', 'TRB', 'ALPHA', 'SFP', 'CTSI', 'ANT', 'ORN', 'HNT', 'AKT', 'WOO', 'FLUX', 'VTHO', 'POLYX', 'NMR', 'ACH', 'SKL', 'AGIX', 'ILV', 'FET', 'OXT', 'GLMR', 'BETA', 'SUPER', 'ARPA', 'XNO', 'BICO', 'API3', 'PLA', 'PHB', 'TWT', 'DEXE', 'SYS', 'STPT', 'DODO', 'VELO', 'TRU', 'TVK', 'NKN', 'XVG', 'LOOM', 'CTK', 'TOMO', 'UOS', 'PUNDIX', 'VOXEL', 'PROM', 'CVC', 'POND', 'AERGO', 'KDA', 'DF', 'BOND', 'DAR', 'PORTO', 'LIT', 'JST', 'ALICE', 'TLM', 'ATA', 'CHR', 'FORTH', 'ERN', 'FX', 'JASMY', 'GAL', 'SUSHI', 'ACM', 'ASTR', 'HFT', 'BNX', 'BNT', 'TWT', 'REEF', 'NULS', 'TRIBE', 'LINA', 'BAKE', 'RIF', 'STG', 'VRA', 'POLS', 'VITE', 'IDEX', 'PSG', 'QUICK', 'RAY', 'OOKI', 'GFT', 'SANTOS', 'ALPACA', 'BIFI', 'BURGER', 'IRIS', 'WNXM', 'VIDT', 'OM', 'AUTO', 'FARM', 'WNK', 'FIDA', 'DFI', 'KLAY', 'MOVR', 'CKB', 'C98', 'XEC', 'PEPE', 'BONK', 'FLOKI', 'ORDI', 'WLD', 'SEI', 'BEAM', 'PYTH', 'JUP', 'STRK', 'ZETA', 'DYM', 'AEVO', 'SAGA', 'MANTA', 'TAIKO', 'REZ', 'TNSR', 'BLUR', 'ARKM', 'WEN', 'JTO', 'ALT', 'ETHFI', 'ENJ', 'CAKE', 'METIS', 'NEO', 'ZRX', 'STPT', 'BAND', 'CELR', 'RLC', 'BALD', 'GNO', 'REN', 'FIO', 'MLN', 'WNK'];

const futuresSymbols = ['NQ', 'ES', 'GC', 'YM', 'ZB', 'ZN', 'ZF', 'ZT', 'ZB', 'ZC', 'ZS', 'ZW', 'KC', 'CC', 'CT', 'CT', 'SB', 'NYM', 'NG', 'CL', 'RB', 'HO', 'BO', 'LPG', 'LH', 'LC', 'FC', 'C', 'W', 'S', 'SM', 'BO', 'RS', 'RR', 'SO', 'RC', 'OJA', '6B', '6E', '6J', '6A', '6N', '6C', '6S', '6Z', 'RTY', 'M2K', 'DJ', 'CC', 'QS', 'NKD', 'N225', 'NQ', 'NK', 'HI', 'HC', 'ZN', 'ZT', 'ZF', 'ZB', 'SI', 'HG', 'PL', 'PA', 'JR', 'MGC', 'AOJ', 'DJ', 'LI', 'EY', 'TNE', 'LNC', 'LGS', 'CU', 'GAX', 'GXC', 'GFX'];

// State management
let currentDate = new Date(2025, 9, 1);
let selectedDay = null;
let editingTrade = null;
let tradeToDelete = null;
let currentView = 'overview';
let deletedTrades = [];
let lastDeleted = null;
let notes = [];
let reminders = [];
let limitOrders = [];
let economicEvents = [];
let lifetimeNotes = [];

// Sample data
let trades = [
    {id: '1', date: '2025-10-22', symbol: 'BTCUSD', type: 'crypto', side: 'Long', entry: 43200, exit: 43650, size: 0.5, pnl: 225, notes: 'Strong breakout'},
    {id: '2', date: '2025-10-22', symbol: 'ETHUSD', type: 'crypto', side: 'Short', entry: 2850, exit: 2820, size: 2, pnl: 60, notes: 'Quick scalp'},
    {id: '3', date: '2025-10-23', symbol: 'US100', type: 'futures', side: 'Long', entry: 15420, exit: 15485, size: 1, pnl: 65, notes: 'Tech rally'},
    {id: '4', date: '2025-10-23', symbol: 'SOLUSD', type: 'crypto', side: 'Long', entry: 125.5, exit: 127.8, size: 10, pnl: 23},
    {id: '5', date: '2025-10-23', symbol: 'BTCUSD', type: 'crypto', side: 'Short', entry: 43800, exit: 44100, size: 0.3, pnl: -90, notes: 'Stopped out'},
];

// Chart instances
let equityChart = null;
let assetChart = null;
let winLossChart = null;
let monthlyChart = null;
let volumeChart = null;
let radarChart = null;
let dailyPnlChart = null;
let scrubMinutes = null; // if set, preview time instead of now
let viewUTC = false;
let compareMyTrades = false;

// Load from localStorage
function loadData() {
    const saved = localStorage.getItem('tradingJournal');
    if (saved) {
        const data = JSON.parse(saved);
        if (data.trades) trades = data.trades;
        if (data.notes) notes = data.notes;
        if (data.reminders) reminders = data.reminders;
        if (data.limitOrders) limitOrders = data.limitOrders;
        if (data.economicEvents) economicEvents = data.economicEvents;
        if (data.lifetimeNotes) lifetimeNotes = data.lifetimeNotes;
        if (data.friends) friends = data.friends;
        if (data.currentUser) currentUser = data.currentUser;
        if (data.theme) document.documentElement.setAttribute('data-theme', data.theme);
    }
}

// Save to localStorage
function saveData() {
    localStorage.setItem('tradingJournal', JSON.stringify({
        trades,
        notes,
        reminders,
        limitOrders,
        economicEvents,
        lifetimeNotes,
        friends,
        currentUser,
        theme: document.documentElement.getAttribute('data-theme')
    }));
    renderCalendar();
    updateStats();
    renderTradeLog();
    renderRecentTrades();
    updateCharts();
}

function exportData() {
    // Export to CSV
    if (trades.length === 0) {
        showToast('No trades to export!');
        return;
    }
    
    let csv = 'Date,Symbol,Type,Side,Entry,Exit,Size,P&L,Notes\n';
    trades.forEach(trade => {
        csv += `${trade.date},${trade.symbol},${trade.type},${trade.side},${trade.entry},${trade.exit},${trade.size},${trade.pnl},"${trade.notes || ''}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `trading-journal-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    showToast('Data exported to CSV!');
}

function importData(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                if (file.name.endsWith('.csv')) {
                    // Import from CSV
                    const lines = e.target.result.split('\n');
                    const headers = lines[0].split(',');
                    const newTrades = [];
                    for (let i = 1; i < lines.length; i++) {
                        if (lines[i].trim()) {
                            const values = lines[i].split(',');
                            if (values.length >= 8) {
                                newTrades.push({
                                    id: Date.now() + i,
                                    date: values[0],
                                    symbol: values[1],
                                    type: values[2],
                                    side: values[3],
                                    entry: parseFloat(values[4]),
                                    exit: parseFloat(values[5]),
                                    size: parseFloat(values[6]),
                                    pnl: parseFloat(values[7]),
                                    notes: values[8] ? values[8].replace(/"/g, '') : ''
                                });
                            }
                        }
                    }
                    trades.push(...newTrades);
                } else {
                    // Import from JSON
                    const data = JSON.parse(e.target.result);
                    if (data.trades) trades = data.trades;
                    if (data.notes) notes = data.notes;
                    if (data.lifetimeNotes) lifetimeNotes = data.lifetimeNotes;
                    if (data.friends) friends = data.friends;
                }
                saveData();
                showToast('Data imported successfully!');
            } catch (err) {
                showToast('Failed to import data: ' + err.message);
            }
        };
        reader.readAsText(file);
    }
}

function loginWithGoogle() {
    currentUser = {
        name: 'Demo User',
        email: 'demo@trading.com',
        avatar: '👨‍💼',
        googleAuth: true
    };
    saveData();
    showToast('Logged in successfully!');
    updateUserProfile();
    closeProfileModal();
}

function updateUserProfile() {
    const profileBtn = document.getElementById('profileButton');
    if (profileBtn) {
        profileBtn.innerHTML = `<span class="logo-icon" style="width:32px;height:32px;border-radius:50%;">${currentUser.avatar}</span> ${currentUser.name}`;
    }
}

// Load on startup
loadData();

// Update symbol list based on type
function updateSymbolList() {
    const type = document.getElementById('tradeType').value;
    const symbolInput = document.getElementById('tradeSymbol');
    const datalist = document.getElementById('symbolList');
    
    datalist.innerHTML = '';
    const symbols = type === 'crypto' ? cryptoSymbols : futuresSymbols;
    
    symbols.forEach(symbol => {
        const option = document.createElement('option');
        option.value = symbol;
        datalist.appendChild(option);
    });
}

// Calendar functions
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementById('monthTitle').textContent = `${monthNames[month]} ${year}`;

    const grid = document.getElementById('daysGrid');
    grid.innerHTML = '';

    const today = new Date();
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
    const todayDate = today.getDate();

    for (let date = 1; date <= daysInMonth; date++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
        const dayTrades = trades.filter(t => t.date === dateStr);
        const dayNotes = notes.filter(n => n.date === dateStr);
        const dailyPnL = dayTrades.reduce((sum, t) => sum + t.pnl, 0);
        const isToday = isCurrentMonth && date === todayDate;
        const dayEl = createDayCell(date, true, dayTrades, dailyPnL, dayNotes, isToday);
        grid.appendChild(dayEl);
    }
}

function createDayCell(date, isCurrentMonth, dayTrades = [], dailyPnL = 0, dayNotes = [], isToday = false) {
    const div = document.createElement('div');
    
    let classes = 'day-cell';
    if (!isCurrentMonth) classes += ' other-month';
    if (isToday) classes += ' today';
    if (isCurrentMonth && dailyPnL > 0) classes += ' positive';
    if (isCurrentMonth && dailyPnL < 0) classes += ' negative';
    if (isCurrentMonth && (dayTrades.length > 0 || dayNotes.length > 0)) classes += ' has-content';
    
    div.className = classes;
    
    if (isCurrentMonth) {
        div.onclick = () => openDayModal(date, dayTrades, dailyPnL, dayNotes);
    }

    let indicators = '';
    if (dayNotes.length > 0) indicators += '<span class="indicator-dot dot-notes"></span>';

    div.innerHTML = `
        <div class="day-number">${date}${isToday ? ' 🎯' : ''}${indicators}</div>
        ${dailyPnL !== 0 ? `<div class="daily-pnl ${dailyPnL > 0 ? 'pnl-positive' : 'pnl-negative'}">${dailyPnL > 0 ? '+' : ''}$${Math.abs(dailyPnL).toFixed(0)}</div>` : ''}
        ${dayTrades.slice(0, 2).map(trade => `
            <div class="trade-chip ${trade.type}">
                ${trade.symbol} · ${trade.pnl > 0 ? '+' : ''}$${Math.abs(trade.pnl)}
            </div>
        `).join('')}
        ${dayTrades.length > 2 ? `<div style="font-size: 11px; color: var(--text-secondary); text-align: center; margin-top: 6px; font-weight: 600;">+${dayTrades.length - 2} more</div>` : ''}
        <div class="add-hint">➕</div>
    `;

    return div;
}

function changeMonth(delta) {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + delta, 1);
    renderCalendar();
}

function openDayModal(date, dayTrades, dailyPnL, dayNotes = []) {
    selectedDay = date;
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    const modalTitle = `${monthNames[currentDate.getMonth()]} ${date}, ${currentDate.getFullYear()}`;
    document.getElementById('modalTitle').textContent = modalTitle;

    // Render day notes in right panel
    const dayNotesList = document.getElementById('dayNotesList');
    if (dayNotes.length === 0) {
        dayNotesList.innerHTML = '<div style="color: var(--text-secondary); text-align: center; padding: 40px;">No notes for this day</div>';
    } else {
        dayNotesList.innerHTML = dayNotes.map(note => `
            <div style="background: var(--bg-secondary); border: 2px solid var(--border); border-radius: 12px; padding: 16px; margin-bottom: 12px;">
                <div style="font-weight: 800; margin-bottom: 8px; color: var(--text-primary);">${note.title}</div>
                <div style="font-size: 14px; color: var(--text-secondary);">${note.content}</div>
            </div>
        `).join('');
    }

    let content = `
        <div style="background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary)); padding: 24px; border-radius: 14px; margin-bottom: 28px; border: 3px solid var(--border);">
            <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Daily P&L</div>
            <div style="font-size: 52px; font-weight: 900; color: ${dailyPnL > 0 ? 'var(--success)' : dailyPnL < 0 ? 'var(--error)' : 'var(--text-primary)'};">
                ${dailyPnL > 0 ? '+' : ''}$${dailyPnL.toFixed(2)}
            </div>
        </div>

        ${dayNotes.length > 0 ? `
            <div class="modal-section">
                <h3 class="section-title">📝 Notes (${dayNotes.length})</h3>
                ${dayNotes.map(note => `
                    <div class="trade-card">
                        <div style="font-weight: 800; margin-bottom: 6px; color: var(--text-primary);">${note.title}</div>
                        <div style="font-size: 13px; color: var(--text-secondary);">${note.content}</div>
                    </div>
                `).join('')}
            </div>
        ` : ''}

        <div class="modal-section">
            <h3 class="section-title">Trades (${dayTrades.length})</h3>
    `;

    if (dayTrades.length === 0) {
        content += `<div class="empty-state"><div class="empty-state-icon">📝</div><div style="margin-top: 12px; font-size: 16px;">No trades recorded for this day</div></div>`;
    } else {
        dayTrades.forEach(trade => {
            content += `
                <div class="trade-card">
                    <div class="trade-header">
                        <div>
                            <div class="trade-symbol">${trade.symbol}</div>
                            <div style="display: flex; gap: 10px; margin-top: 12px;">
                                <span class="badge ${trade.type === 'crypto' ? 'badge-crypto' : 'badge-futures'}">${trade.type === 'crypto' ? 'Crypto' : 'Futures'}</span>
                                <span class="badge badge-side">${trade.side}</span>
                            </div>
                        </div>
                        <div style="font-size: 28px; font-weight: 900; color: ${trade.pnl > 0 ? 'var(--success)' : 'var(--error)'};">
                            ${trade.pnl > 0 ? '+' : ''}$${trade.pnl.toFixed(2)}
                        </div>
                    </div>
                    <div class="trade-info">
                        <div><strong>Entry:</strong> $${trade.entry.toFixed(2)}</div>
                        <div><strong>Exit:</strong> $${trade.exit.toFixed(2)}</div>
                        <div><strong>Size:</strong> ${trade.size}</div>
                    </div>
                    ${trade.notes ? `<div style="margin-top: 16px; padding-top: 16px; border-top: 2px solid var(--border); font-size: 14px; color: var(--text-secondary);">${trade.notes}</div>` : ''}
                </div>
            `;
        });
    }

    content += '</div>';
    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('dayModal').classList.add('active');
}

// Store selected date for add trade
let selectedDateForTrade = null;

function openAddTradeToDay(date) {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    selectedDateForTrade = dateStr;
    openAddTrade(dateStr);
    closeDayModal();
}

function closeDayModal() {
    document.getElementById('dayModal').classList.remove('active');
}

function openAddTrade(initialDate = '') {
    editingTrade = null;
    document.getElementById('tradeModalTitle').textContent = 'Add Trade';
    document.getElementById('tradeForm').reset();
    if (initialDate) {
        document.getElementById('tradeDate').value = initialDate;
    } else {
        document.getElementById('tradeDate').value = new Date().toISOString().split('T')[0];
    }
    updateSymbolList();
    document.getElementById('tradeModal').classList.add('active');
}

function closeTradeModal() {
    document.getElementById('tradeModal').classList.remove('active');
    editingTrade = null;
}

document.getElementById('tradeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const date = document.getElementById('tradeDate').value;
    const symbol = document.getElementById('tradeSymbol').value.toUpperCase();
    const type = document.getElementById('tradeType').value;
    const side = document.getElementById('tradeSide').value;
    const entry = parseFloat(document.getElementById('tradeEntry').value);
    const exit = parseFloat(document.getElementById('tradeExit').value);
    const size = parseFloat(document.getElementById('tradeSize').value);
    const notes = document.getElementById('tradeNotes').value;

    const pnl = side === 'Long' ? (exit - entry) * size : (entry - exit) * size;

    if (editingTrade) {
        const index = trades.findIndex(t => t.id === editingTrade.id);
        trades[index] = { ...editingTrade, date, symbol, type, side, entry, exit, size, pnl, notes };
        showToast('Trade updated successfully!');
    } else {
        trades.push({id: Date.now().toString(), date, symbol, type, side, entry, exit, size, pnl, notes});
        showToast('Trade added successfully!');
    }

    saveData();
    closeTradeModal();
    // Force calendar and stats update
    renderCalendar();
    updateStats();
    renderTradeLog();
    renderRecentTrades();
    if (document.getElementById('dayModal').classList.contains('active')) {
        closeDayModal();
    }
});

function deleteTrade(tradeId) {
    lastDeleted = trades.find(t => t.id === tradeId);
    trades = trades.filter(t => t.id !== tradeId);
    saveData();
    closeDayModal();
    showToast('Trade deleted. Press Ctrl+Z to undo.');
}

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'z' && lastDeleted) {
        trades.push(lastDeleted);
        lastDeleted = null;
        saveData();
        showToast('Trade restored!');
    }
});

function updateStats() {
    const totalPnL = trades.reduce((sum, t) => sum + t.pnl, 0);
    const winningTrades = trades.filter(t => t.pnl > 0);
    const losingTrades = trades.filter(t => t.pnl < 0);
    const winRate = trades.length > 0 ? Math.round((winningTrades.length / trades.length) * 100) : 0;
    
    // Long/Short win rates
    const longTrades = trades.filter(t => t.side === 'Long');
    const shortTrades = trades.filter(t => t.side === 'Short');
    const longWins = longTrades.filter(t => t.pnl > 0).length;
    const shortWins = shortTrades.filter(t => t.pnl > 0).length;
    const longWinRate = longTrades.length > 0 ? Math.round((longWins / longTrades.length) * 100) : 0;
    const shortWinRate = shortTrades.length > 0 ? Math.round((shortWins / shortTrades.length) * 100) : 0;
    
    const avgWin = winningTrades.length > 0 ? winningTrades.reduce((sum, t) => sum + t.pnl, 0) / winningTrades.length : 0;
    const avgLoss = losingTrades.length > 0 ? losingTrades.reduce((sum, t) => sum + t.pnl, 0) / losingTrades.length : 0;
    const profitFactor = avgLoss !== 0 ? avgWin / Math.abs(avgLoss) : 0;
    const expectancy = trades.length > 0 ? totalPnL / trades.length : 0;
    
    const totalPnLEl = document.getElementById('totalPnL');
    if (totalPnLEl) totalPnLEl.textContent = `$${Math.abs(totalPnL).toFixed(2)}`;
    const winRateEl = document.getElementById('winRate');
    if (winRateEl) winRateEl.textContent = `${winRate}%`;
    const profitFactorEl = document.getElementById('profitFactor');
    if (profitFactorEl) profitFactorEl.textContent = profitFactor.toFixed(2);
    const avgWinEl = document.getElementById('avgWin');
    if (avgWinEl) avgWinEl.textContent = `$${Math.abs(avgWin).toFixed(2)}`;
    const avgLossEl = document.getElementById('avgLoss');
    if (avgLossEl) avgLossEl.textContent = `$${Math.abs(avgLoss).toFixed(2)}`;
    const expectancyEl = document.getElementById('expectancy');
    if (expectancyEl) expectancyEl.textContent = `$${Math.abs(expectancy).toFixed(2)}`;
    const totalTradesValueEl = document.getElementById('totalTradesValue');
    if (totalTradesValueEl) totalTradesValueEl.textContent = trades.length;
    
    // Update long/short win rate if elements exist
    const longWinElement = document.getElementById('longWinRate');
    const shortWinElement = document.getElementById('shortWinRate');
    if (longWinElement) longWinElement.textContent = `${longWinRate}%`;
    if (shortWinElement) shortWinElement.textContent = `${shortWinRate}%`;
    
    // Update calendar stats
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const monthTrades = trades.filter(t => {
        const [y, m] = t.date.split('-').map(Number);
        return y === year && m === month;
    });
    const yearTrades = trades.filter(t => {
        const [y] = t.date.split('-').map(Number);
        return y === year;
    });
    const monthlyPnL = monthTrades.reduce((sum, t) => sum + t.pnl, 0);
    const yearlyPnL = yearTrades.reduce((sum, t) => sum + t.pnl, 0);
    const uniqueDays = new Set(monthTrades.map(t => t.date));
    const avgPnL = trades.length > 0 ? (totalPnL / trades.length) : 0;
    const winRateValue = winRate;
    
    const monthlyPnLEl = document.getElementById('monthlyPnL');
    if (monthlyPnLEl) monthlyPnLEl.textContent = `$${Math.abs(monthlyPnL).toFixed(2)}`;
    const yearlyPnLEl = document.getElementById('yearlyPnL');
    if (yearlyPnLEl) yearlyPnLEl.textContent = `$${Math.abs(yearlyPnL).toFixed(2)}`;
    const tradingDaysEl = document.getElementById('tradingDays');
    if (tradingDaysEl) tradingDaysEl.textContent = uniqueDays.size;
    const totalTradesEl = document.getElementById('totalTrades');
    if (totalTradesEl) totalTradesEl.textContent = trades.length;
    const avgPnLCalEl = document.getElementById('avgPnLCal');
    if (avgPnLCalEl) avgPnLCalEl.textContent = `$${Math.abs(avgPnL).toFixed(0)}`;
    const winRateStatEl = document.getElementById('winRateStat');
    if (winRateStatEl) winRateStatEl.textContent = `${winRateValue}%`;
}

function renderTradeLog() {
    const container = document.getElementById('allTradesList');
    if (trades.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📝</div><div style="margin-top: 16px; font-size: 18px;">No trades yet</div></div>';
        return;
    }
    container.innerHTML = trades.sort((a,b) => new Date(b.date) - new Date(a.date)).map(trade => `
        <div class="trade-card">
            <div class="trade-header">
                <div><div class="trade-symbol">${trade.symbol}</div>
                <div style="font-size:12px;color:var(--text-secondary);margin-top:6px;">${trade.date}</div>
                <div style="display:flex;gap:10px;margin-top:10px;">
                    <span class="badge ${trade.type === 'crypto' ? 'badge-crypto' : 'badge-futures'}">${trade.type === 'crypto' ? 'Crypto' : 'Futures'}</span>
                    <span class="badge badge-side">${trade.side}</span>
                </div></div>
                <div style="font-size:28px;font-weight:900;color:${trade.pnl > 0 ? 'var(--success)' : 'var(--error)'};">
                    ${trade.pnl > 0 ? '+' : ''}$${trade.pnl.toFixed(2)}
                </div>
            </div>
            <div class="trade-info">
                <div><strong>Entry:</strong> $${trade.entry.toFixed(2)}</div>
                <div><strong>Exit:</strong> $${trade.exit.toFixed(2)}</div>
                <div><strong>Size:</strong> ${trade.size}</div>
            </div>
        </div>
    `).join('');
}

function renderRecentTrades() {
    const container = document.getElementById('recentTradesList');
    const recent = trades.sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0,5);
    if (recent.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📊</div></div>';
        return;
    }
    container.innerHTML = recent.map(trade => `
        <div class="trade-card">
            <div class="trade-header">
                <div><div class="trade-symbol">${trade.symbol}</div>
                <div style="display:flex;gap:10px;margin-top:10px;">
                    <span class="badge ${trade.type === 'crypto' ? 'badge-crypto' : 'badge-futures'}">${trade.type}</span>
                    <span class="badge badge-side">${trade.side}</span>
                </div></div>
                <div style="font-size:24px;font-weight:900;color:${trade.pnl > 0 ? 'var(--success)' : 'var(--error)'};">
                    ${trade.pnl > 0 ? '+' : ''}$${trade.pnl.toFixed(2)}
                </div>
            </div>
        </div>
    `).join('');
}

function updateCharts() {
    renderEquityChart();
    renderAssetChart();
    renderWinLossChart();
    // Monthly chart removed
    renderSessionsWidget();
    renderVolumeChart();
    renderRadarChart();
    renderDailyPnlChart();
    initOverviewDragAndDrop();
    initVolumeControls();
}

function renderEquityChart() {
    const ctx = document.getElementById('equityChart');
    if (!ctx || trades.length === 0) return;
    
    const sortedTrades = trades.sort((a,b) => new Date(a.date) - new Date(b.date));
    const cumulativePnL = [];
    let runningTotal = 0;
    sortedTrades.forEach(trade => {
        runningTotal += trade.pnl;
        cumulativePnL.push(runningTotal);
    });
    
    const dates = sortedTrades.map(t => t.date);
    
    if (equityChart) equityChart.destroy();
    equityChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Cumulative P&L',
                data: cumulativePnL,
                borderColor: '#16a34a',
                backgroundColor: 'rgba(22, 163, 74, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { 
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    cornerRadius: 8
                }
            },
            scales: {
                x: {
                    ticks: { maxRotation: 45, minRotation: 0 }
                }
            }
        }
    });
}

function renderAssetChart() {
    const ctx = document.getElementById('assetChart');
    if (!ctx || trades.length === 0) return;
    
    const assetCounts = {};
    trades.forEach(t => {
        assetCounts[t.symbol] = (assetCounts[t.symbol] || 0) + 1;
    });
    
    const labels = Object.keys(assetCounts).slice(0, 8);
    const data = Object.values(assetCounts).slice(0, 8);
    
    if (assetChart) assetChart.destroy();
    assetChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: ['#16a34a', '#0ea5a1', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#10b981', '#06b6d4'],
                borderColor: '#ffffff',
                borderWidth: 3,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        padding: 15,
                        usePointStyle: true,
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

function renderWinLossChart() {
    const ctx = document.getElementById('winLossChart');
    if (!ctx || trades.length === 0) return;
    
    const wins = trades.filter(t => t.pnl > 0).length;
    const losses = trades.filter(t => t.pnl < 0).length;
    
    if (winLossChart) winLossChart.destroy();
    winLossChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Wins', 'Losses'],
            datasets: [{
                label: 'Count',
                data: [wins, losses],
                backgroundColor: ['#16a34a', '#ef4444']
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { 
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    cornerRadius: 8
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

function renderMonthlyChart() {
    // Monthly chart removed as requested
    const ctx = document.getElementById('monthlyChart');
    if (ctx && monthlyChart) {
        monthlyChart.destroy();
    }
}

// ---------- Sessions + Volume ----------
function getNowInET() {
    const now = new Date();
    const fmt = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour12: false,
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    const [mdy, time] = fmt.format(now).split(', ');
    const [month, day, year] = mdy.split('/').map(Number);
    const [hour, minute, second] = time.split(':').map(Number);
    return new Date(Date.UTC(year, month - 1, day, hour, minute, second));
}

const SESSIONS_ET = [
    { key: 'asia', label: 'Asia', start: 19 * 60, end: 4 * 60, cls: 's-asia' }, // 7pm-4am ET (wraps)
    { key: 'london', label: 'London', start: 3 * 60, end: 11.5 * 60, cls: 's-london' },
    { key: 'ny-am', label: 'NY AM', start: 9.5 * 60, end: 12 * 60, cls: 's-ny-am' },
    { key: 'ny-lunch', label: 'NY Lunch', start: 12 * 60, end: 13.5 * 60, cls: 's-ny-lunch' },
    { key: 'ny-pm', label: 'NY PM', start: 13.5 * 60, end: 16 * 60, cls: 's-ny-pm' },
];

function minutesSinceMidnightET(dateET) {
    return dateET.getUTCHours() * 60 + dateET.getUTCMinutes();
}

function renderSessionsWidget() {
    const timeline = document.getElementById('sessionTimeline');
    const status = document.getElementById('sessionStatus');
    if (!timeline || !status) return;

    // Rebuild absolute blocks (for precise positioning)
    timeline.innerHTML = '';
    const addAbsBlock = (startMin, endMin, cls, label) => {
        const leftPct = (startMin / (24 * 60)) * 100;
        const widthPct = ((endMin - startMin) / (24 * 60)) * 100;
        const div = document.createElement('div');
        div.className = `session-block ${cls}`;
        div.style.position = 'absolute';
        div.style.left = leftPct + '%';
        div.style.width = widthPct + '%';
        div.style.top = 0;
        div.style.bottom = 0;
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
        div.style.fontSize = '11px';
        div.style.fontWeight = '700';
        div.style.color = 'var(--text-secondary)';
        div.textContent = label || '';
        timeline.appendChild(div);
    };
    SESSIONS_ET.forEach(s => {
        if (s.end < s.start) {
            addAbsBlock(s.start, 24 * 60, s.cls, s.label);
            addAbsBlock(0, s.end, s.cls, s.label);
        } else {
            addAbsBlock(s.start, s.end, s.cls, s.label);
        }
    });

    const nowET = getNowInET();
    const mins = minutesSinceMidnightET(nowET);

    // Move now marker
    const marker = document.getElementById('sessionNowMarker');
    if (marker) {
        const pct = Math.min(99.5, Math.max(0, (mins / (24 * 60)) * 100));
        marker.style.left = pct + '%';
    }

    // Determine active session and time to next key
    const session = getActiveSession(mins);
    const nextEvent = getNextKeyTime(mins);
    const countdown = formatCountdown(nextEvent.minutes - mins);
    status.textContent = `${session.label} session · ${nextEvent.label} in ${countdown}`;
}

function getActiveSession(mins) {
    for (const s of SESSIONS_ET) {
        if (s.end < s.start) {
            if (mins >= s.start || mins < s.end) return s;
        } else if (mins >= s.start && mins < s.end) return s;
    }
    return { label: 'Off-hours' };
}

const KEY_TIMES_ET = [
    { label: 'London open', minutes: 3 * 60 },
    { label: 'NY open', minutes: 9.5 * 60 },
    { label: 'Lunch', minutes: 12 * 60 },
    { label: 'NY close', minutes: 16 * 60 },
    { label: 'Asia open', minutes: 19 * 60 },
];

function getNextKeyTime(mins) {
    for (const kt of KEY_TIMES_ET) {
        if (kt.minutes > mins) return kt;
    }
    // Wrap to next day
    return { ...KEY_TIMES_ET[0], minutes: KEY_TIMES_ET[0].minutes + 24 * 60 };
}

function formatCountdown(deltaMins) {
    const m = ((deltaMins % (24 * 60)) + (24 * 60)) % (24 * 60);
    const h = Math.floor(m / 60);
    const mm = Math.floor(m % 60);
    return `${h}h ${String(mm).padStart(2, '0')}m`;
}

function generateTypicalVolumeSeries() {
    // 96 points (15-min) for smoother curve
    const points = 96;
    const series = new Array(points).fill(0);
    const toIdx = (hour, minute = 0) => Math.round(((hour * 60 + minute) / (24 * 60)) * (points - 1));

    const peaks = [
        { idx: toIdx(3, 30), amp: 0.6 }, // London early strength
        { idx: toIdx(9, 45), amp: 1.0 }, // NY open peak
        { idx: toIdx(14, 30), amp: 0.7 }, // Afternoon push
        { idx: toIdx(20, 0), amp: 0.35 }, // Asia moderate
    ];

    for (let i = 0; i < points; i++) {
        let base = 0.15; // baseline
        peaks.forEach(p => {
            const d = Math.abs(i - p.idx);
            base += p.amp * Math.exp(-(d * d) / (2 * Math.pow(points * 0.045, 2)));
        });
        // Lunch dip
        const lunchIdx = toIdx(12, 30);
        const lunchDip = 0.35 * Math.exp(-Math.pow((i - lunchIdx) / (points * 0.03), 2));
        series[i] = Math.max(0.05, base - lunchDip);
    }
    return series;
}

function renderVolumeChart() {
    const ctx = document.getElementById('volumeChart');
    if (!ctx) return;

    const data = generateTypicalVolumeSeries();
    // Labels every 15m, used for ticks and tooltips
    const labels = new Array(data.length).fill(0).map((_, i) => {
        const mins = Math.round((i / (data.length - 1)) * 24 * 60);
        const h = Math.floor(mins / 60);
        const m = mins % 60;
        return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`;
    });

    if (volumeChart) volumeChart.destroy();
    const yMax = Math.max(...data);
    const colorFor = (v) => {
        const t = Math.max(0, Math.min(1, v / yMax));
        const r = Math.round(239 + (22 - 239) * t); // red->green
        const g = Math.round(68 + (163 - 68) * t);
        const b = Math.round(68 + (74 - 68) * t);
        return `rgb(${r},${g},${b})`;
    };

    volumeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [
                {
                    label: 'Avg volume',
                    data,
                    borderColor: (c) => {
                        const {ctx, chartArea} = c.chart;
                        if (!chartArea) return '#14b8a6';
                        const g = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
                        g.addColorStop(0/24, '#3b82f6');
                        g.addColorStop(8/24, '#f59e0b');
                        g.addColorStop(16/24, '#14b8a6');
                        g.addColorStop(1, '#14b8a6');
                        return g;
                    },
                    backgroundColor: (c) => {
                        const {ctx, chartArea} = c.chart;
                        if (!chartArea) return 'rgba(20,184,166,0.2)';
                        const g = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                        g.addColorStop(0, 'rgba(20,184,166,0.25)');
                        g.addColorStop(1, 'rgba(20,184,166,0.05)');
                        return g;
                    },
                    fill: true,
                    pointRadius: 0,
                    borderWidth: 3,
                    tension: 0.35,
                },
                {
                    label: 'My trades',
                    data: [],
                    hidden: true,
                    borderColor: '#a855f7',
                    backgroundColor: 'rgba(168,85,247,0.15)',
                    borderWidth: 2,
                    tension: 0.35,
                    pointRadius: 0,
                    fill: false,
                }
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { title: (items)=> items[0].label + (viewUTC ? ' UTC' : '') } },
            },
            scales: {
                x: {
                    display: true,
                    grid: { color: 'rgba(255,255,255,0.06)', lineWidth: 1 },
                    ticks: {
                        autoSkip: false,
                        maxTicksLimit: 24,
                        callback: (v) => {
                            const h = parseInt(labels[v].split(':')[0], 10);
                            return h % 2 === 0 ? labels[v].slice(0,2) : '';
                        }
                    }
                },
                y: {
                    display: true,
                    grid: { color: 'rgba(255,255,255,0.06)', lineWidth: 1 },
                    ticks: { callback: v => v + '%' }
                },
            },
            animation: { duration: 900, easing: 'easeOutCubic' },
        },
        plugins: [{
            id: 'sessionShade',
            beforeDraw(chart) {
                const {ctx, chartArea} = chart;
                if (!chartArea) return;
                const drawBand = (startH, endH, color) => {
                    const x1 = chart.scales.x.getPixelForValue(startH * 4);
                    const x2 = chart.scales.x.getPixelForValue(endH * 4);
                    ctx.save();
                    ctx.fillStyle = color;
                    ctx.fillRect(x1, chartArea.top, x2 - x1, chartArea.bottom - chartArea.top);
                    ctx.restore();
                };
                drawBand(0, 8, 'rgba(59,130,246,0.06)');
                drawBand(8, 16, 'rgba(245,158,11,0.06)');
                drawBand(16, 24, 'rgba(20,184,166,0.06)');
                const drawDivider = (h, label) => {
                    const x = chart.scales.x.getPixelForValue(h * 4);
                    ctx.save();
                    ctx.strokeStyle = 'rgba(124,58,237,0.5)';
                    ctx.setLineDash([4,4]);
                    ctx.beginPath(); ctx.moveTo(x, chartArea.top); ctx.lineTo(x, chartArea.bottom); ctx.stroke();
                    ctx.setLineDash([]);
                    ctx.fillStyle = 'rgba(255,255,255,0.7)';
                    ctx.font = '12px sans-serif';
                    ctx.fillText(label, x + 6, chartArea.top + 14);
                    ctx.restore();
                };
                drawDivider(0, 'Asia Open');
                drawDivider(8, 'London Open');
                drawDivider(16, 'NY Open');
            }
        }]
    });

    updateNowLinesAndVolumeLevel();
    updateTradeOverlay();
}

function updateNowLinesAndVolumeLevel() {
    // Position overlays
    const nowET = getNowInET();
    const minsLive = minutesSinceMidnightET(nowET);
    const mins = (scrubMinutes !== null) ? scrubMinutes : minsLive;
    const pct = (mins / (24 * 60));
    const sessionLine = document.getElementById('sessionNowMarker');
    const volumeLine = document.getElementById('volumeNowLine');
    if (sessionLine) sessionLine.style.left = (pct * 100) + '%';
    if (volumeLine) volumeLine.style.left = (pct * 100) + '%';

    // Volume level indicator
    const volData = volumeChart ? volumeChart.data.datasets[0].data : generateTypicalVolumeSeries();
    const idx = Math.min(volData.length - 1, Math.round(volData.length * pct));
    const v = volData[idx];
    const dot = document.getElementById('volumeLevelDot');
    const txt = document.getElementById('volumeLevelText');
    if (dot && txt) {
        dot.className = 'traffic-dot ' + (v > 0.75 ? 'traffic-high' : v > 0.4 ? 'traffic-med' : 'traffic-low');
        txt.textContent = v > 0.75 ? 'High' : v > 0.4 ? 'Medium' : 'Low';
        txt.style.color = v > 0.75 ? 'var(--success)' : v > 0.4 ? 'var(--warning)' : 'var(--error)';
    }

    // Update session label time text
    const label = document.getElementById('sessionTimeLabel');
    const scrubber = document.getElementById('sessionScrubber');
    if (label && scrubber) {
        label.style.left = (pct * 100) + '%';
        const h = Math.floor(mins / 60);
        const m = Math.floor(mins % 60);
        label.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')} ET` + (scrubMinutes !== null ? ' • preview' : '');
        scrubber.style.left = (pct * 100) + '%';
    }

    // Status based on mins
    const session = getActiveSession(mins);
    const nextEvent = getNextKeyTime(mins);
    const countdown = formatCountdown(nextEvent.minutes - mins);
    const status = document.getElementById('sessionStatus');
    if (status) status.textContent = `${session.label} session · ${nextEvent.label} in ${countdown}`;

    // Update modern session segments
    updateSessionSegments();
}

function updateSessionSegments() {
    const now = new Date();
    const mins = now.getHours() * 60 + now.getMinutes();
    const sessions = [
        { id: 'asia', start: 0, end: 8 },
        { id: 'london', start: 8, end: 16 },
        { id: 'ny', start: 16, end: 24 },
    ];
    sessions.forEach(s => {
        const seg = document.getElementById('seg-' + s.id);
        const pg = document.getElementById('pg-' + s.id);
        const cd = document.getElementById('cd-' + s.id);
        if (!seg || !pg || !cd) return;
        const startM = s.start * 60;
        const endM = s.end * 60;
        const active = mins >= startM && mins < endM;
        seg.classList.toggle('seg-active', active);
        const total = endM - startM;
        const progress = active ? ((mins - startM) / total) * 100 : (mins < startM ? 0 : 100);
        pg.style.width = Math.max(0, Math.min(100, progress)) + '%';
        const remaining = active ? endM - mins : (mins < startM ? startM - mins : (24*60 - mins) + startM);
        const h = Math.floor(remaining / 60);
        const m = remaining % 60;
        cd.textContent = active ? `${h}h ${String(m).padStart(2,'0')}m until close` : `${h}h ${String(m).padStart(2,'0')}m until open`;
    });
}

function initVolumeControls() {
    const utc = document.getElementById('toggleUTC');
    const cmp = document.getElementById('toggleCompareTrades');
    if (utc) utc.onchange = () => { viewUTC = utc.checked; renderVolumeChart(); };
    if (cmp) cmp.onchange = () => { compareMyTrades = cmp.checked; updateTradeOverlay(); };
}

function updateTradeOverlay() {
    if (!volumeChart) return;
    const ds = volumeChart.data.datasets[1];
    ds.hidden = !compareMyTrades;
    if (compareMyTrades) {
        const perQuarter = new Array(96).fill(0);
        trades.forEach(t => {
            // If time component existed, we would parse it; here we distribute roughly by day mid time
            const d = new Date(t.date + 'T12:00:00');
            const hour = d.getHours();
            const idx = Math.min(95, Math.round((hour * 60) / 15));
            perQuarter[idx] += 1;
        });
        const max = Math.max(1, ...perQuarter);
        ds.data = perQuarter.map(v => Math.round((v / max) * 100));
    }
    volumeChart.update('none');
}

// ---------- Analytics extras ----------
function renderRadarChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) return;

    const totalPnL = trades.reduce((s, t) => s + t.pnl, 0);
    const wins = trades.filter(t => t.pnl > 0);
    const losses = trades.filter(t => t.pnl < 0);
    const winRate = trades.length ? (wins.length / trades.length) * 100 : 0;
    const avgWin = wins.length ? wins.reduce((s, t) => s + t.pnl, 0) / wins.length : 0;
    const avgLoss = Math.abs(losses.length ? losses.reduce((s, t) => s + t.pnl, 0) / losses.length : 0);
    const profitFactor = avgLoss ? avgWin / avgLoss : 0;
    const consistency = Math.min(100, Math.max(0, 100 - (losses.length / (trades.length || 1)) * 100));
    const recovery = profitFactor * 40; // scaled

    if (radarChart) radarChart.destroy();
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Win %', 'Profit factor', 'Avg win/loss', 'Recovery', 'Consistency', 'P&L'],
            datasets: [{
                data: [winRate, profitFactor * 50, (avgWin / (avgLoss || 1)) * 50, recovery, consistency, Math.max(0, Math.min(100, totalPnL))],
                backgroundColor: 'rgba(124,58,237,0.2)',
                borderColor: '#7c3aed',
                pointBackgroundColor: '#7c3aed',
                borderWidth: 2,
            }],
        },
        options: {
            plugins: { legend: { display: false } },
            scales: { r: { suggestedMin: 0, suggestedMax: 100, grid: { color: 'rgba(255,255,255,0.1)' } } },
        },
    });
}

function renderDailyPnlChart() {
    const ctx = document.getElementById('dailyPnlChart');
    if (!ctx) return;
    const byDate = {};
    trades.forEach(t => byDate[t.date] = (byDate[t.date] || 0) + t.pnl);
    const entries = Object.entries(byDate).sort((a, b) => new Date(a[0]) - new Date(b[0]));
    const last = entries.slice(-10);
    const labels = last.map(e => e[0].slice(5));
    const vals = last.map(e => e[1]);

    if (dailyPnlChart) dailyPnlChart.destroy();
    dailyPnlChart = new Chart(ctx, {
        type: 'bar',
        data: { labels, datasets: [{ data: vals, backgroundColor: vals.map(v => v >= 0 ? 'rgba(22,163,74,0.8)' : 'rgba(239,68,68,0.8)') }] },
        options: { plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { grid: { color: 'rgba(255,255,255,0.08)' } } } }
    });
}

function saveLifetimeNotes() {
    const text = document.getElementById('lifetimeNotesText').value;
    if (lifetimeNotes.length > 0) {
        lifetimeNotes[0].content = text;
        lifetimeNotes[0].updated = new Date().toISOString();
    } else {
        lifetimeNotes.push({ id: 'lifetime', content: text, updated: new Date().toISOString() });
    }
    
    // Also update the calendar textarea
    const calendarTextarea = document.getElementById('calendarLifetimeNotes');
    if (calendarTextarea) {
        calendarTextarea.value = text;
    }
    
    saveData();
    showToast('Lifetime notes saved!');
}

function loadLifetimeNotes() {
    const textarea = document.getElementById('lifetimeNotesText');
    const calendarTextarea = document.getElementById('calendarLifetimeNotes');
    
    if (textarea && lifetimeNotes.length > 0) {
        textarea.value = lifetimeNotes[0].content;
    }
    
    if (calendarTextarea && lifetimeNotes.length > 0) {
        calendarTextarea.value = lifetimeNotes[0].content;
    }
}

function saveCalendarLifetimeNotes() {
    const text = document.getElementById('calendarLifetimeNotes').value;
    if (lifetimeNotes.length > 0) {
        lifetimeNotes[0].content = text;
        lifetimeNotes[0].updated = new Date().toISOString();
    } else {
        lifetimeNotes.push({ id: 'lifetime', content: text, updated: new Date().toISOString() });
    }
    
    // Also update the floating panel textarea
    const floatingTextarea = document.getElementById('lifetimeNotesText');
    if (floatingTextarea) {
        floatingTextarea.value = text;
    }
    
    saveData();
    showToast('Lifetime notes saved!');
}

function resetData() {
    if (!confirm('Are you sure you want to reset ALL data? This cannot be undone!')) {
        return;
    }
    
    trades = [];
    notes = [];
    lifetimeNotes = [];
    friends = [];
    localStorage.removeItem('tradingJournal');
    
    // Reset form fields
    if (document.getElementById('calendarLifetimeNotes')) {
        document.getElementById('calendarLifetimeNotes').value = '';
    }
    if (document.getElementById('lifetimeNotesText')) {
        document.getElementById('lifetimeNotesText').value = '';
    }
    
    saveData();
    closeSettingsModal();
    showToast('All data has been reset!');
}

function toggleLifetimeNotes() {
    const panel = document.getElementById('lifetimeNotesPanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    if (panel.style.display === 'block') {
        loadLifetimeNotes();
    }
}

let selectedDayForNote = null;

function openAddNoteToDay() {
    if (selectedDay) {
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`;
        selectedDayForNote = dateStr;
        document.getElementById('noteDate').value = dateStr;
    }
    document.getElementById('noteDate').style.display = 'block';
    document.getElementById('noteModal').classList.add('active');
}

function openAddTradeFromDay() {
    if (selectedDay) {
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`;
        openAddTrade(dateStr);
        closeDayModal();
    }
}

function openAddNoteModal() {
    document.getElementById('noteDate').style.display = 'none';
    document.getElementById('noteModal').classList.add('active');
}

function closeNoteModal() {
    document.getElementById('noteModal').classList.remove('active');
    selectedDayForNote = null;
}

function showOverview() {
    currentView = 'overview';
    document.getElementById('overviewView').style.display = 'block';
    document.getElementById('calendarView').style.display = 'none';
    document.getElementById('analyticsView').style.display = 'none';
    document.getElementById('socialView').style.display = 'none';
    document.getElementById('tradeLogView').style.display = 'none';
    document.querySelectorAll('.nav-buttons .btn').forEach(b => b.classList.remove('active'));
    document.getElementById('navOverview').classList.add('active');
    updateCharts();
    updateStats();
}

function showCalendar() {
    currentView = 'calendar';
    document.getElementById('overviewView').style.display = 'none';
    document.getElementById('calendarView').style.display = 'block';
    document.getElementById('analyticsView').style.display = 'none';
    document.getElementById('socialView').style.display = 'none';
    document.getElementById('tradeLogView').style.display = 'none';
    document.querySelectorAll('.nav-buttons .btn').forEach(b => b.classList.remove('active'));
    document.getElementById('navCalendar').classList.add('active');
}

function showAnalytics() {
    currentView = 'analytics';
    document.getElementById('overviewView').style.display = 'none';
    document.getElementById('calendarView').style.display = 'none';
    document.getElementById('socialView').style.display = 'none';
    document.getElementById('analyticsView').style.display = 'block';
    document.getElementById('tradeLogView').style.display = 'none';
    document.querySelectorAll('.nav-buttons .btn').forEach(b => b.classList.remove('active'));
    document.getElementById('navAnalytics').classList.add('active');
    updateCharts();
    updateStats();
}

function showTradeLog() {
    currentView = 'tradelog';
    document.getElementById('overviewView').style.display = 'none';
    document.getElementById('calendarView').style.display = 'none';
    document.getElementById('analyticsView').style.display = 'none';
    document.getElementById('socialView').style.display = 'none';
    document.getElementById('tradeLogView').style.display = 'block';
    document.querySelectorAll('.nav-buttons .btn').forEach(b => b.classList.remove('active'));
    document.getElementById('navTradeLog').classList.add('active');
    renderTradeLog();
    updateStats();
}

function showSocial() {
    currentView = 'social';
    document.getElementById('overviewView').style.display = 'none';
    document.getElementById('calendarView').style.display = 'none';
    document.getElementById('analyticsView').style.display = 'none';
    document.getElementById('tradeLogView').style.display = 'none';
    document.getElementById('socialView').style.display = 'block';
    document.querySelectorAll('.nav-buttons .btn').forEach(b => b.classList.remove('active'));
    document.getElementById('navSocial').classList.add('active');
    renderFriends();
}

function openProfile() {
    const content = document.getElementById('profileContent');
    content.innerHTML = `
        <div style="font-size: 64px; margin-bottom: 16px;">${currentUser.avatar}</div>
        <div style="font-size: 24px; font-weight: 700;">${currentUser.name}</div>
        <div style="color: var(--text-secondary); margin-top: 8px;">${currentUser.email || 'Not logged in'}</div>
    `;
    document.getElementById('profileModal').classList.add('active');
}

function closeProfileModal() {
    document.getElementById('profileModal').classList.remove('active');
}

function addFriend() {
    const name = prompt("Enter friend's name:");
    if (name) {
        friends.push({
            id: Date.now().toString(),
            name: name,
            pnl: Math.floor(Math.random() * 5000),
            visibility: 'visible'
        });
        saveData();
        renderFriends();
        showToast('Friend added!');
    }
}

function renderFriends() {
    const container = document.getElementById('friendsList');
    if (!container) return;
    
    if (friends.length === 0) {
        container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">👥</div><div style="margin-top:16px;font-size:18px;">No friends yet</div><button class="btn btn-primary" onclick="addFriend()" style="margin-top:20px;">Add Friend</button></div>';
        return;
    }
    
    container.innerHTML = friends.map(f => `
        <div style="background:var(--bg-secondary);padding:16px;border-radius:12px;margin-bottom:12px;border:2px solid var(--border);">
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <div>
                    <div style="font-size:20px;font-weight:800;">${f.name}</div>
                    <div style="font-size:14px;color:var(--text-secondary);margin-top:4px;">P&L: <strong style="color:${f.pnl >= 0 ? 'var(--success)' : 'var(--error)'};">$${f.pnl >= 0 ? '+' : ''}${f.pnl}</strong></div>
                </div>
                <div style="font-size:28px;">👤</div>
            </div>
        </div>
    `).join('');
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-card').forEach(c => c.classList.remove('active'));
    document.getElementById('theme' + theme.charAt(0).toUpperCase() + theme.slice(1)).classList.add('active');

    // update only the theme in storage
    let data = localStorage.getItem('tradingJournal');
    data = data ? JSON.parse(data) : {};
    data.theme = theme;
    localStorage.setItem('tradingJournal', JSON.stringify(data));

    showToast(`Theme changed to ${theme}!`);
}


function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.4s ease reverse';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

const noteFormEl = document.getElementById('noteForm');
if (noteFormEl) noteFormEl.addEventListener('submit', function(e) {
    e.preventDefault();
    const date = document.getElementById('noteDate').value;
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;
    
    if (!title || !content) {
        showToast('Please fill in title and content!');
        return;
    }
    
    if (date) {
        notes.push({ id: Date.now().toString(), date, title, content });
        showToast('Day note saved!');
        // Refresh day modal if open
        if (document.getElementById('dayModal').classList.contains('active')) {
            closeDayModal();
            openDayModal(selectedDay, trades.filter(t => t.date === date), 
                trades.filter(t => t.date === date).reduce((s, t) => s + t.pnl, 0),
                notes.filter(n => n.date === date));
        }
    } else {
        showToast('Error: Please select a date!');
    }
    
    saveData();
    closeNoteModal();
    document.getElementById('noteForm').reset();
});

function openSettings() {
    document.getElementById('settingsModal').classList.add('active');
}
function closeSettingsModal() {
    document.getElementById('settingsModal').classList.remove('active');
}

// Initialize (guarded for multi-page support)
if (document.getElementById('daysGrid') && document.getElementById('monthTitle')) {
    renderCalendar();
}
if (document.getElementById('todayPnL') || document.getElementById('monthlyPnL')) {
    updateStats();
}
if (document.getElementById('recentTradesList')) {
    renderRecentTrades();
}
if (document.querySelector('canvas')) {
    updateCharts();
}
if (document.getElementById('lifetimeNotesText')) {
    loadLifetimeNotes();
}
if (document.getElementById('allTradesList')) {
    renderTradeLog();
}

// Tick updates for sessions/volume overlays
setInterval(() => {
    renderSessionsWidget();
    updateNowLinesAndVolumeLevel();
}, 60000);

// --------- Drag interactions for Sessions scrub ---------
let isScrubbing = false;
document.addEventListener('mousedown', (e) => {
    const tl = document.getElementById('sessionTimeline');
    const knob = document.getElementById('sessionScrubber');
    if (!tl || !knob) return;
    const rect = tl.getBoundingClientRect();
    const within = (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom);
    if (e.target === knob || within) {
        isScrubbing = true;
        setScrubFromClientX(e.clientX, rect);
    }
});
document.addEventListener('mousemove', (e) => {
    if (!isScrubbing) return;
    const tl = document.getElementById('sessionTimeline');
    const rect = tl.getBoundingClientRect();
    setScrubFromClientX(e.clientX, rect);
});
document.addEventListener('mouseup', () => { isScrubbing = false; });

function setScrubFromClientX(x, rect) {
    const clamped = Math.max(rect.left, Math.min(rect.right, x));
    const pct = (clamped - rect.left) / rect.width;
    scrubMinutes = Math.round(pct * 24 * 60);
    updateNowLinesAndVolumeLevel();
}

function resetSessionScrub() { scrubMinutes = null; updateNowLinesAndVolumeLevel(); }
function jumpToKeyTime(which) {
    const map = { nyopen: 9.5 * 60, londonopen: 3 * 60, close: 16 * 60 };
    scrubMinutes = map[which] || null;
    updateNowLinesAndVolumeLevel();
}

// --------- Drag & drop reordering for overview ---------
function initOverviewDragAndDrop() {
    const leftCol = document.querySelector('#overviewView .layout #overviewLeftCol');
    const statsCol = document.getElementById('statsColumn');
    [leftCol, statsCol].forEach(col => {
        if (!col) return;
        col.querySelectorAll('.draggable').forEach(el => {
            if (el.getAttribute('draggable') === 'true') return;
            el.setAttribute('draggable', 'true');
            el.addEventListener('dragstart', onDragStart);
            el.addEventListener('dragend', onDragEnd);
        });
        col.addEventListener('dragover', onDragOver);
        col.addEventListener('drop', onDrop);
    });
    restoreWidgetOrder();
}

let dragEl = null;
function onDragStart(e) { dragEl = e.currentTarget; dragEl.classList.add('dragging'); e.dataTransfer.effectAllowed = 'move'; }
function onDragEnd(e) { if (dragEl) dragEl.classList.remove('dragging'); dragEl = null; persistWidgetOrder(); }
function onDragOver(e) {
    e.preventDefault();
    const col = e.currentTarget;
    const after = getDragAfterElement(col, e.clientY);
    const dragging = document.querySelector('.dragging');
    if (!dragging) return;
    if (after == null) col.appendChild(dragging); else col.insertBefore(dragging, after);
}
function onDrop() { persistWidgetOrder(); }
function getDragAfterElement(container, y) {
    const els = [...container.querySelectorAll('.draggable:not(.dragging)')];
    return els.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) return { offset, element: child };
        else return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
function persistWidgetOrder() {
    const leftCol = document.querySelector('#overviewView .layout #overviewLeftCol');
    const statsCol = document.getElementById('statsColumn');
    const leftOrder = [...leftCol.querySelectorAll('.draggable')].map(e => e.dataset.widgetId);
    const rightOrder = [...statsCol.querySelectorAll('.draggable')].map(e => e.dataset.widgetId);
    localStorage.setItem('overviewOrder', JSON.stringify({ leftOrder, rightOrder }));
}
function restoreWidgetOrder() {
    const saved = localStorage.getItem('overviewOrder');
    if (!saved) return;
    const { leftOrder = [], rightOrder = [] } = JSON.parse(saved);
    const leftCol = document.querySelector('#overviewView .layout #overviewLeftCol');
    const statsCol = document.getElementById('statsColumn');
    const map = {};
    document.querySelectorAll('[data-widget-id]').forEach(el => { map[el.dataset.widgetId] = el; });
    leftOrder.forEach(id => { if (map[id]) leftCol.appendChild(map[id]); });
    rightOrder.forEach(id => { if (map[id]) statsCol.appendChild(map[id]); });
}
