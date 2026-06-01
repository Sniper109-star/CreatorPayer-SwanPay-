import { NextRequest, NextResponse } from "next/server";
import { createSolanaPayment } from "@/lib/solana-mpp";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency, orderId } = body;

    if (!amount || !orderId) {
      return NextResponse.json({ error: "Amount and orderId required" }, { status: 400 });
    }

    const payment = await createSolanaPayment(amount, orderId);

    return NextResponse.json(payment);
  } catch (error) {
    console.error("Solana payment creation error:", error);
    return NextResponse.json({ error: "Failed to create payment" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const orderId = searchParams.get("orderId");

  if (!orderId) {
    return NextResponse.json({ error: "Order ID required" }, { status: 400 });
  }

  return NextResponse.json({
    orderId,
    status: "pending",
    message: "Solana MPP payment status"
  });
}