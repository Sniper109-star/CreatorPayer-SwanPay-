import { MobileNav } from "@/components/MobileNav";
import Link from "next/link";

export default function DashboardPage() {
  const quickActions = [
    { title: "Payment Link", desc: "Create & share", href: "/payments/links", color: "bg-blue-600" },
    { title: "Send Tip", desc: "Support creators", href: "/tips", color: "bg-purple-600" },
    { title: "Subscribe", desc: "Creator tiers", href: "/subscriptions", color: "bg-green-600" },
    { title: "Run Ads", desc: "Campaign setup", href: "/ads", color: "bg-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 pb-20">
      <header className="bg-neutral-800 p-4 border-b border-neutral-700">
        <h1 className="text-2xl font-bold text-white">CreatorPay</h1>
        <p className="text-neutral-400 text-sm">Crypto native payments infrastructure</p>
      </header>

      <main className="p-4 space-y-6">
        <section className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={`${action.color} rounded-xl p-4 text-white text-center transition-opacity active:opacity-80`}
            >
              <div className="font-semibold">{action.title}</div>
              <div className="text-xs opacity-80">{action.desc}</div>
            </Link>
          ))}
        </section>

        <section className="bg-neutral-800 rounded-xl p-4">
          <h2 className="text-lg font-semibold text-white mb-3">Wallet Balance</h2>
          <div className="text-3xl font-bold text-green-400">$0.00</div>
          <p className="text-neutral-400 text-sm">Ready for payouts</p>
        </section>

        <section className="bg-neutral-800 rounded-xl p-4">
          <h2 className="text-lg font-semibold text-white mb-3">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-neutral-700">
              <span className="text-neutral-300">No recent transactions</span>
            </div>
          </div>
        </section>
      </main>

      <MobileNav />
    </div>
  );
}