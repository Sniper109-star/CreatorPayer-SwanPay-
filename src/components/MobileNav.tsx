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
    <nav className="fixed bottom-0 left-0 right-0 bg-neutral-800 border-t border-neutral-700 safe-area-bottom">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            href={tab.path}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              pathname === tab.path ? "text-blue-400" : "text-neutral-400"
            }`}
          >
            <span className="text-xl mb-1">{tab.icon}</span>
            <span className="text-xs">{tab.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}