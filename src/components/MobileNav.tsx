"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Home", path: "/", icon: "🏠" },
  { name: "Payments", path: "/payments", icon: "💳" },
  { name: "Wallet", path: "/wallet", icon: "👛" },
  { name: "Profile", path: "/profile", icon: "👤" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-panel safe-area-bottom z-30">
      <div className="flex justify-around items-center h-14">
        {tabs.map((tab, index) => {
          const isActive = pathname === tab.path;
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 stagger-${index + 1} ${
                isActive ? "nav-item-active scale-105" : "text-[#fcd34d]/80"
              }`}
            >
              <span className="text-xl mb-0.5 leading-none">{tab.icon}</span>
              <span className="text-[10px] font-semibold tracking-wide">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
