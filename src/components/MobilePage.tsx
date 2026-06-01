"use client";

import { ReactNode } from "react";

interface MobilePageProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  backHref?: string;
  rightAction?: ReactNode;
}

export function MobilePage({ children, title, subtitle, backHref, rightAction }: MobilePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1107] via-[#2a1d10] to-[#1a1107] text-[#fef3c7] safe-area-top">
      {/* Header */}
      {(title || backHref || rightAction) && (
        <header className="sticky top-0 z-20 glass-panel">
          <div className="flex items-center justify-between px-4 h-14">
            <div className="flex items-center gap-3">
              {backHref && (
                <a href={backHref} className="text-[#fcd34d] hover:text-[#fbbf24] transition-colors p-2 -ml-2 active:scale-95">
                  ←
                </a>
              )}
              <div>
                {title && <h1 className="text-lg font-bold text-[#fef3c7] leading-tight">{title}</h1>}
                {subtitle && <p className="text-xs text-[#fcd34d]">{subtitle}</p>}
              </div>
            </div>
            {rightAction && <div className="flex items-center">{rightAction}</div>}
          </div>
        </header>
      )}

      {/* Content */}
      <div className="px-4 py-4 space-y-4 animate-fade-in">
        {children}
      </div>
    </div>
  );
}
