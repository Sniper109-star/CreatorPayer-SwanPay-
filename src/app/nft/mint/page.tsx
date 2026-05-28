import { MobileNav } from "@/components/MobileNav";
import Link from "next/link";

export default function NFTMintPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1107] via-[#291e0f] to-[#1a1107] pb-20 text-[#fef3c7]">
      <header className="bg-[#291e0f]/90 backdrop-blur-sm p-4 border-b border-[#422d13] flex items-center">
        <Link href="/" className="text-[#fcd34d] mr-3">←</Link>
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]">
          Mint Payout Badge
        </h1>
      </header>

      <main className="p-4 space-y-6">
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🎨</div>
          <h2 className="text-lg font-semibold text-[#fef3c7] mb-2">NFT Payout Badges</h2>
          <p className="text-[#fcd34d] text-sm">
            Digital receipts, permanently stored on-chain
          </p>
        </div>

        <div className="bg-[#291e0f] rounded-xl p-4 border border-[#422d13]">
          <p className="text-center text-[#fcd34d] text-sm">
            Badges are automatically minted when you receive payouts.
            No manual action required.
          </p>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}