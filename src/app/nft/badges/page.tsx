import { MobileNav } from "@/components/MobileNav";
import Link from "next/link";

export default function BadgesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1107] via-[#291e0f] to-[#1a1107] pb-20 text-[#fef3c7]">
      <header className="bg-[#291e0f]/90 backdrop-blur-sm p-4 border-b border-[#422d13] flex items-center">
        <Link href="/" className="text-[#fcd34d] mr-3">←</Link>
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]">
          NFT Payout Badges
        </h1>
      </header>

      <main className="p-4 space-y-6">
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-lg font-semibold text-[#fef3c7] mb-2">Verified Payouts with Digital Badges</h2>
          <p className="text-[#fcd34d] text-sm">
            Every CreatorPay payout mints a unique NFT badge - your immutable proof on-chain.
          </p>
        </div>

        <div className="bg-[#291e0f] rounded-xl p-6 border border-[#422d13]">
          <h3 className="font-bold text-[#f59e0b] mb-3">Feature Highlights:</h3>
          <ul className="space-y-2 text-sm text-[#fcd34d]">
            <li className="flex items-center">
              <span className="text-[#f59e0b] mr-2">✓</span>
              Immutable Proof - Blockchain-verified NFT for each payout
            </li>
            <li className="flex items-center">
              <span className="text-[#f59e0b] mr-2">✓</span>
              Creator Pride - Collectible milestone badges
            </li>
            <li className="flex items-center">
              <span className="text-[#f59e0b] mr-2">✓</span>
              Transparency - Anyone can verify without exposing details
            </li>
            <li className="flex items-center">
              <span className="text-[#f59e0b] mr-2">✓</span>
              Automation - Al ensures reliable minting
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-[#f59e0b]/10 to-transparent rounded-xl p-4 border border-[#f59e0b]/20">
          <p className="text-center text-[#fcd34d] text-xs">
            No badges yet. Receive your first payout to get started!
          </p>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}