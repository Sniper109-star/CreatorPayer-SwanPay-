import { NextRequest, NextResponse } from "next/server";
import { createSolanaPayment } from "@/lib/solana-mpp";

export async function POST(request: NextRequest) {
  try {
    const { amount, currency, orderId } = await request.json();

    if (!amount || !orderId) {
      return NextResponse.json({ error: "Amount and orderId are required" }, { status: 400 });
    }

    const payment = await createSolanaPayment(amount, orderId);

    return NextResponse.json(payment, { status: 201 });
  } catch (error) {
    console.error("Solana charge error:", error);
    return NextResponse.json({ error: "Failed to create charge" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ service: "solana-charge", status: "ok" });
}
