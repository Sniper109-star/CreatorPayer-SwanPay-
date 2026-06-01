"use client";

import { ReactNode } from "react";
import { SafeAreaInsets } from "@/types";

interface MobileContainerProps {
  children: ReactNode;
  insets?: SafeAreaInsets;
  className?: string;
}

export function MobileContainer({ children, insets, className = "" }: MobileContainerProps) {
  return (
    <main
      className={`
        min-h-screen bg-gradient-to-b from-[#1a1107] via-[#2a1d10] to-[#1a1107]
        text-[#fef3c7] pb-20 safe-area-bottom
        ${className}
      `}
      style={{
        paddingTop: insets?.top ?? 0,
        paddingLeft: insets?.left ?? 0,
        paddingRight: insets?.right ?? 0,
      }}
    >
      {children}
    </main>
  );
}
