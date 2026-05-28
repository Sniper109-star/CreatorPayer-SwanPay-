import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { transactionId, creatorId, amount, txHash } = await request.json();

  if (!transactionId) {
    return NextResponse.json({ error: "Transaction ID required" }, { status: 400 });
  }

  // In production, this would:
  // 1. Call the NFT contract to mint a badge
  // 2. Store the token ID in the database
  // 3. Generate badge metadata
  
  const badgeMetadata = {
    name: "CreatorPay Payout Badge",
    description: `Verified payout of $${amount} via CreatorPay`,
    image: "https://creatorpay.com/badge/payout.png",
    attributes: [
      { trait_type: "Amount", value: amount },
      { trait_type: "Chain", value: "Monad" },
      { trait_type: "Type", value: "Payout" }
    ],
    transaction_hash: txHash
  };

  return NextResponse.json({
    success: true,
    tokenId: `badge_${transactionId}`,
    metadata: badgeMetadata
  });
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const creatorId = searchParams.get("creatorId");
  
  // Return creator's NFT badges
  return NextResponse.json({
    badges: [],
    message: "NFT Payout Badges - Your verifiable proof of payment"
  });
}