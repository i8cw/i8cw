import React, { useState } from 'react';
import { TrendingUp, Clock3, ShieldCheck } from 'lucide-react';

export const ROICalculator = () => {
  const [orders, setOrders] = useState(20000);
  const [minutes, setMinutes] = useState(4);
  const [rate, setRate] = useState(45);

  const annualHours = (orders * minutes / 60) * 12;
  const annualSavings = Math.round(annualHours * rate * 0.94);
  const errorsEliminated = Math.round(orders * 12 * 0.012);

  const formatNum = (num: number) => new Intl.NumberFormat('en-US').format(num);
  const formatCurrency = (num: number) => new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD', 
    maximumFractionDigits: 0 
  }).format(num);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      <div className="bg-white border border-hairline rounded-2xl p-7 sm:p-9 space-y-8 shadow-[0_20px_60px_rgba(10,13,20,0.05)]">
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-mutedink">Orders per month</label>
            <span className="font-mono text-sm font-semibold text-obsidian">{formatNum(orders)}</span>
          </div>
          <input 
            data-testid="roi-orders-slider" 
            min="1000" 
            max="500000" 
            step="1000" 
            type="range" 
            value={orders} 
            onChange={(e) => setOrders(Number(e.target.value))} 
            className="w-full accent-electric" 
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-mutedink">Manual minutes per order</label>
            <span className="font-mono text-sm font-semibold text-obsidian">{minutes} min</span>
          </div>
          <input 
            data-testid="roi-minutes-slider" 
            min="1" 
            max="15" 
            step="1" 
            type="range" 
            value={minutes} 
            onChange={(e) => setMinutes(Number(e.target.value))} 
            className="w-full accent-electric" 
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-mutedink">Fully-loaded hourly cost</label>
            <span className="font-mono text-sm font-semibold text-obsidian">${rate}/hr</span>
          </div>
          <input 
            data-testid="roi-rate-slider" 
            min="15" 
            max="120" 
            step="5" 
            type="range" 
            value={rate} 
            onChange={(e) => setRate(Number(e.target.value))} 
            className="w-full accent-electric" 
          />
        </div>
        <p className="text-xs text-faintink leading-relaxed">
          Estimate based on 94% automation coverage and a 1.2% manual-entry error rate observed across our integration programmes. Your actual ROI is typically higher.
        </p>
      </div>
      <div className="bg-obsidian rounded-2xl p-7 sm:p-9 text-white flex flex-col justify-between relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-electric/20 blur-3xl pointer-events-none"></div>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-electric-glow relative z-10">Estimated annual impact</p>
        <div className="mt-8 space-y-8 relative z-10">
          <div data-testid="roi-savings-value">
            <p className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">{formatCurrency(annualSavings)}</p>
            <p className="mt-1.5 text-sm text-slate-400 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-electric-emerald" /> Recovered every single year</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-display text-2xl font-bold text-electric-glow">{formatNum(annualHours)}</p>
              <p className="mt-1 text-xs text-slate-400 flex items-center gap-1.5"><Clock3 className="w-3.5 h-3.5" /> Hours returned to your team</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-electric-emerald">{formatNum(errorsEliminated)}</p>
              <p className="mt-1 text-xs text-slate-400 flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Costly errors eliminated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
