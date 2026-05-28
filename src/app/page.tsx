import { MobileNav } from "@/components/MobileNav";
import Link from "next/link";

export default function DashboardPage() {
  const quickActions = [
    { title: "Payment Link", desc: "Create & share", href: "/payments/links", color: "bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]" },
    { title: "Send Tip", desc: "Support creators", href: "/tips", color: "bg-gradient-to-r from-[#d97706] to-[#f59e0b]" },
    { title: "Subscribe", desc: "Creator tiers", href: "/subscriptions", color: "bg-gradient-to-r from-[#fbbf24] to-[#fcd34d]" },
    { title: "Run Ads", desc: "Campaign setup", href: "/ads", color: "bg-gradient-to-r from-[#f59e0b] to-[#d97706]" },
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

        <section className="bg-[#291e0f] rounded-xl p-4 border border-[#422d13]">
          <h2 className="text-lg font-semibold text-[#fef3c7] mb-3 flex items-center">
            <span className="text-[#f59e0b] mr-2">⚡</span>
            Recent Activity
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-[#422d13]">
              <span className="text-[#fcd34d] font-medium">No recent transactions</span>
              <span className="text-xs text-[#fcd34d]/60">—</span>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#f59e0b]/10 to-transparent rounded-xl p-6 border border-[#f59e0b]/20 text-center">
          <h3 className="text-lg font-bold text-[#f59e0b] mb-2">Pay for Social Ads with Crypto</h3>
          <p className="text-[#fcd34d] text-sm mb-4">TikTok • Facebook • Twitter • Instagram</p>
          <Link href="/ads" className="inline-block bg-[#f59e0b] text-[#1a1107] px-6 py-2 rounded-full font-bold hover:bg-[#d97706] transition-colors">
            Start Campaign
          </Link>
        </section>
      </main>

      <MobileNav />
    </div>
  );
}