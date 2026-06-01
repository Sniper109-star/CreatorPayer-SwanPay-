import { MobileNav } from "@/components/MobileNav";
import Link from "next/link";

export default function DashboardPage() {
  const quickActions = [
    { title: "Payment Link", desc: "Create & share", href: "/payments/links", color: "bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]" },
    { title: "Send Tip", desc: "Support creators", href: "/tips", color: "bg-gradient-to-r from-[#d97706] to-[#f59e0b]" },
    { title: "Subscribe", desc: "Creator tiers", href: "/subscriptions", color: "bg-gradient-to-r from-[#fbbf24] to-[#fcd34d]" },
    { title: "Run Ads", desc: "Campaign setup", href: "/ads", color: "bg-gradient-to-r from-[#f59e0b] to-[#d97706]" },
    { title: "Card Payment", desc: "Stripe checkout", href: "/payments/card", color: "bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]" },
    { title: "Jupiter Swap", desc: "Solana DEX", href: "/solana/swap", color: "bg-gradient-to-r from-[#d97706] to-[#f59e0b]" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1107] via-[#291e0f] to-[#1a1107] pb-20 text-[#fef3c7]">
      <header className="bg-[#291e0f]/90 backdrop-blur-sm p-4 border-b border-[#422d13] sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]">CreatorPay</h1>
        <p className="text-[#fcd34d] text-sm font-medium">Fast, Low-Fee OnChain Payments</p>
      </header>

      <main className="p-4 space-y-6">
        <section className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={`${action.color} rounded-xl p-4 text-[#1a1107] text-center transition-all active:scale-95 shadow-lg shadow-[#f59e0b]/20`}
            >
              <div className="font-bold">{action.title}</div>
              <div className="text-xs opacity-90">{action.desc}</div>
            </Link>
          ))}
        </section>

        <section className="bg-[#291e0f] rounded-xl p-4 border border-[#422d13] shadow-lg shadow-[#f59e0b]/10">
          <h2 className="text-lg font-semibold text-[#fef3c7] mb-3 flex items-center">
            <span className="text-[#f59e0b] mr-2">💰</span>
            Wallet Balance
          </h2>
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] mb-1">$0.00</div>
          <p className="text-[#fcd34d] text-sm">Ready for payouts • Monad Testnet</p>
        </section>

        <section className="bg-gradient-to-br from-[#f59e0b]/20 to-[#291e0f] rounded-xl p-5 border border-[#f59e0b]/30">
          <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] mb-2 flex items-center">
            <span className="mr-2">🏆</span>
            Verified Payouts, Now With Digital Badges
          </h2>
          <p className="text-[#fcd34d] text-xs mb-3">Every payout = unique NFT badge on-chain</p>
          <div className="flex space-x-2">
            <Link href="/nft/badges" className="flex-1 bg-[#f59e0b] text-[#1a1107] py-2 rounded-lg text-sm font-bold text-center">
              View Badges
            </Link>
            <Link href="/nft/mint" className="flex-1 bg-[#3f2e12] text-white py-2 rounded-lg text-sm font-bold text-center">
              Mint Now
            </Link>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#f59e0b]/10 to-transparent rounded-xl p-6 border border-[#f59e0b]/20 text-center">
          <h3 className="text-lg font-bold text-[#f59e0b] mb-2">Pay for Social Ads with Crypto</h3>
          <p className="text-[#fcd34d] text-sm mb-4">TikTok • Facebook • Twitter • Instagram</p>
          <Link href="/ads" className="inline-block bg-[#f59e0b] text-[#1a1107] px-6 py-2 rounded-full font-bold hover:bg-[#d97706] transition-colors">
            Start Campaign
          </Link>
        </section>

        <section className="bg-[#291e0f] rounded-xl p-4 border border-[#422d13]">
          <h2 className="text-lg font-semibold text-[#fef3c7] mb-3 flex items-center">
            <span className="text-[#f59e0b] mr-2">✈️</span>
            Tourist Bookings
          </h2>
          <p className="text-[#fcd34d] text-sm mb-3">Book tours, hotels, and experiences</p>
          <Link href="/tours" className="inline-block bg-[#f59e0b] text-[#1a1107] px-4 py-2 rounded-lg text-sm font-bold">
            Browse Tours
          </Link>
        </section>
      </main>

      <MobileNav />
    </div>
  );
}
