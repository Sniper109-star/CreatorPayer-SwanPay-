"use client";

interface AnimatedValueProps {
  value: string | number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function AnimatedValue({ value, prefix = "", suffix = "", decimals = 2 }: AnimatedValueProps) {
  return (
    <div className="relative inline-flex items-baseline">
      <span className="text-3xl font-bold text-[#fef3c7] tracking-tight">
        {prefix}{typeof value === 'number' ? value.toFixed(decimals) : value}{suffix}
      </span>
      <span className="absolute -right-2 -top-1 w-2 h-2 bg-green-400 rounded-full animate-pulse-soft" />
    </div>
  );
}
