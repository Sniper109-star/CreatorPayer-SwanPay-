import { NextRequest, NextResponse } from "next/server";
import { getJupiterQuote, createJupiterSwapTransaction } from "@/server/solana-server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { inputMint, outputMint, amount, slippageBps = 50, userPublicKey } = body;

    if (!inputMint || !outputMint || !amount || !userPublicKey) {
      return NextResponse.json({ error: "Missing required swap parameters" }, { status: 400 });
    }

    const quote = await getJupiterQuote(inputMint, outputMint, amount);
    const swapTx = await createJupiterSwapTransaction(quote, userPublicKey);

    return NextResponse.json({ quote, swapTx });
  } catch (error) {
    console.error("Jupiter swap error:", error);
    return NextResponse.json({ error: "Swap failed" }, { status: 500 });
  }
}
