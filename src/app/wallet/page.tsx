import { MobileNav } from "@/components/MobileNav";
import Link from "next/link";

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-neutral-900 pb-20">
      <header className="bg-neutral-800 p-4 border-b border-neutral-700 flex items-center">
        <Link href="/" className="text-neutral-400 mr-3">←</Link>
        <h1 className="text-xl font-bold text-white">Wallet</h1>
      </header>

      <main className="p-4 space-y-4">
        <div className="bg-neutral-800 rounded-xl p-4 border border-neutral-700">
          <h2 className="text-lg font-semibold text-white mb-2">Balance</h2>
          <div className="text-3xl font-bold text-green-400 mb-1">$0.00</div>
          <div className="text-neutral-400 text-sm">USD</div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="bg-blue-600 text-white py-3 rounded-xl font-medium">Deposit</button>
          <Link href="/wallet/withdraw" className="bg-neutral-700 text-white text-center py-3 rounded-xl font-medium">Withdraw</Link>
        </div>

        <div className="bg-neutral-800 rounded-xl p-4">
          <h3 className="font-semibold text-white mb-3">Payout Methods</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-neutral-300">Monad Wallet</span>
              <span className="text-green-400">Connected</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-300">Solana Address</span>
              <span className="text-neutral-400">Add wallet</span>
            </div>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}