import { MobileNav } from "@/components/MobileNav";
import Link from "next/link";
import { MobilePage } from "@/components/MobilePage";
import { StatCard } from "@/components/dashboard/StatCard";
import { QuickActionCard } from "@/components/dashboard/QuickActionCard";
import { AnimatedValue } from "@/components/dashboard/AnimatedValue";

export default function DashboardPage() {
  const quickActions = [
    { title: "Payment Link", desc: "Create & share", href: "/payments/links", icon: "🔗", gradient: "bg-gradient-to-br from-[#fbbf24] to-[#f59e0b]" },
    { title: "Send Tip", desc: "Support creators", href: "/tips", icon: "💎", gradient: "bg-gradient-to-br from-[#f59e0b] to-[#d97706]" },
    { title: "Subscribe", desc: "Creator tiers", href: "/subscriptions", icon: "⭐", gradient: "bg-gradient-to-br from-[#fcd34d] to-[#fbbf24]" },
    { title: "Run Ads", desc: "Campaign setup", href: "/ads", icon: "📢", gradient: "bg-gradient-to-br from-[#f59e0b] to-[#d97706]" },
    { title: "Card Payment", desc: "Secure checkout", href: "/payments/card", icon: "💳", gradient: "bg-gradient-to-br from-[#fbbf24] to-[#fcd34d]" },
    { title: "Jupiter Swap", desc: "Solana DEX", href: "/solana/swap", icon: "🔁", gradient: "bg-gradient-to-br from-[#f59e0b] to-[#b45309]" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1107] via-[#2a1d10] to-[#1a1107] text-[#fef3c7]">
      <header className="sticky top-0 z-20 glass-panel safe-area-top">
        <div className="px-4 h-14 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-transparent bg-clip-text gradient-gold">CreatorPay</h1>
            <p className="text-[11px] text-[#fcd34d] font-medium tracking-wide">Fast, Low-Fee OnChain</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center text-xs font-bold text-[#1a1107]">
            U
          </div>
        </div>
      </header>

      <main className="px-4 py-4 space-y-5 pb-24">
        {/* Balance Hero */}
        <section className="glass-panel rounded-3xl p-5 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-[#fcd34d] uppercase tracking-wider">Wallet Balance</span>
            <span className="text-[10px] text-[#fcd34d]/80 bg-[#f59e0b]/10 px-2 py-1 rounded-full">Monad Testnet</span>
          </div>
          <AnimatedValue value={0} prefix="$" />
          <p className="text-xs text-[#fcd34d] mt-1">Ready for payouts</p>
        </section>

        {/* Quick Actions Grid */}
        <section>
          <h2 className="text-sm font-semibold text-[#fef3c7] mb-3 px-1">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <QuickActionCard
                key={action.href}
                {...action}
                delay={index * 80}
              />
            ))}
          </div>
        </section>

        {/* Stats Row */}
        <section className="grid grid-cols-3 gap-3">
          <StatCard label="Earnings" value="$124" change="12%" positive icon="💰" />
          <StatCard label="Tips" value="24" change="8%" positive icon="💎" />
          <StatCard label="Subs" value="18" change="-2%" icon="⭐" />
        </section>

        {/* NFT Badges Feature */}
        <section className="glass-panel rounded-2xl p-4 border border-[#f59e0b]/30 animate-slide-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🏆</span>
            <div>
              <h3 className="text-sm font-bold text-[#fef3c7]">NFT Payout Badges</h3>
              <p className="text-[11px] text-[#fcd34d]">Digital proof on-chain</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href="/nft/badges" className="flex-1 bg-[#f59e0b] text-[#1a1107] py-2.5 rounded-xl text-xs font-bold text-center active:scale-95 transition-transform">
              View Badges
            </Link>
            <Link href="/nft/mint" className="flex-1 bg-[#3f2e12] text-white py-2.5 rounded-xl text-xs font-bold text-center active:scale-95 transition-transform">
              Mint Now
            </Link>
          </div>
        </section>

        {/* Payment Hub Integration */}
        <section className="glass-panel rounded-2xl p-4 animate-slide-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🌐</span>
            <div>
              <h3 className="text-sm font-bold text-[#fef3c7]">Payment Hub EE</h3>
              <p className="text-[11px] text-[#fcd34d]">Real-time payment gateway</p>
            </div>
          </div>
          <p className="text-xs text-[#fcd34d]/80 mb-3">
            Integrated with PH-EE middleware for seamless payment processing across all channels.
          </p>
          <div className="flex gap-2">
            <Link href="/payments/links" className="flex-1 bg-[#f59e0b]/10 text-[#fbbf24] py-2 rounded-lg text-xs font-bold text-center border border-[#f59e0b]/30">
              Payment Links
            </Link>
            <Link href="/payments/history" className="flex-1 bg-[#f59e0b]/10 text-[#fbbf24] py-2 rounded-lg text-xs font-bold text-center border border-[#f59e0b]/30">
              History
            </Link>
          </div>
        </section>

        {/* Tourist Bookings Card */}
        <section className="bg-gradient-to-r from-[#f59e0b]/10 to-transparent rounded-2xl p-4 border border-[#f59e0b]/20">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xl">✈️</span>
            <h3 className="text-sm font-bold text-[#fef3c7]">Tourist Bookings</h3>
          </div>
          <p className="text-xs text-[#fcd34d] mb-3">Book tours, hotels, and experiences with crypto</p>
          <Link href="/tours" className="inline-block bg-[#f59e0b] text-[#1a1107] px-4 py-2 rounded-xl text-xs font-bold active:scale-95 transition-transform">
            Browse Tours
          </Link>
        </section>
      </main>

      <MobileNav />
    </div>
  );
}
