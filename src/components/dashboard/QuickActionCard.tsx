"use client";

import Link from "next/link";

interface QuickActionCardProps {
  title: string;
  desc: string;
  href: string;
  icon: string;
  gradient: string;
  delay?: number;
}

export function QuickActionCard({ title, desc, href, icon, gradient, delay = 0 }: QuickActionCardProps) {
  return (
    <Link
      href={href}
      className={`
        ${gradient} rounded-2xl p-4 text-[#1a1107] text-left
        transition-all duration-300 ease-out
        active:scale-[0.97] hover:shadow-lg
        animate-slide-up
        group
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl leading-none group-hover:scale-110 transition-transform duration-300">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm mb-0.5">{title}</div>
          <div className="text-[11px] opacity-90 leading-tight">{desc}</div>
        </div>
      </div>
    </Link>
  );
}
