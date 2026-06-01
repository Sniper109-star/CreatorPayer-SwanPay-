"use client";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
  icon?: string;
}

export function StatCard({ label, value, change, positive, icon }: StatCardProps) {
  return (
    <div className="glass-panel rounded-2xl p-4 animate-slide-up">
      <div className="flex items-start justify-between mb-2">
        <span className="text-xs font-medium text-[#fcd34d] uppercase tracking-wider">{label}</span>
        {icon && <span className="text-lg">{icon}</span>}
      </div>
      <div className="text-2xl font-bold text-[#fef3c7] mb-1">{value}</div>
      {change && (
        <div className={`text-xs font-medium ${positive ? "text-green-400" : "text-red-400"}`}>
          {positive ? "↑" : "↓"} {change}
        </div>
      )}
    </div>
  );
}
