import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "Search query required" }, { status: 400 });
  }

  // In production, this would:
  // 1. Fetch the Solana pay-skills registry
  // 2. Search for providers matching the query
  // 3. Return matching providers with payment metadata

  const mockProviders = [
    {
      id: "solana-foundation/usdc-payments",
      title: "USDC Payments",
      description: "Accept USDC payments via Solana MPP",
      category: "finance",
      service_url: "https://api.solana.com/mpp",
    }
  ];

  return NextResponse.json({
    providers: mockProviders,
    query,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { providerId, amount } = body;

  if (!providerId || !amount) {
    return NextResponse.json({ error: "Provider ID and amount required" }, { status: 400 });
  }

  // In production, this would:
  // 1. Look up the provider from pay-skills registry
  // 2. Create a payment request via MPP
  // 3. Return the 402 challenge

  return NextResponse.json({
    status: 402,
    providerId,
    amount,
    message: "Payment required via Solana MPP",
  });
}