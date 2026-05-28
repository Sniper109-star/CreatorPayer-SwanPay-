import { MobileNav } from "@/components/MobileNav";
import Link from "next/link";

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-neutral-900 pb-20">
      <header className="bg-neutral-800 p-4 border-b border-neutral-700 flex items-center">
        <Link href="/" className="text-neutral-400 mr-3">←</Link>
        <h1 className="text-xl font-bold text-white">Payments</h1>
      </header>

      <main className="p-4 space-y-4">
        <Link href="/payments/links" className="block bg-neutral-800 rounded-xl p-4 border border-neutral-700">
          <h3 className="font-semibold text-white">Payment Links</h3>
          <p className="text-neutral-400 text-sm">Create shareable payment links</p>
        </Link>
        
        <Link href="/payments/checkout" className="block bg-neutral-800 rounded-xl p-4 border border-neutral-700">
          <h3 className="font-semibold text-white">Crypto Checkout</h3>
          <p className="text-neutral-400 text-sm">Accept crypto payments</p>
        </Link>

        <Link href="/payments/history" className="block bg-neutral-800 rounded-xl p-4 border border-neutral-700">
          <h3 className="font-semibold text-white">Transaction History</h3>
          <p className="text-neutral-400 text-sm">View all payments</p>
        </Link>
      </main>

      <MobileNav />
    </div>
  );
}