import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { paymentId, status, amount, currency, orderId } = body;

    if (!paymentId || !status) {
      return NextResponse.json({ error: "Invalid webhook payload" }, { status: 400 });
    }

    if (status === "finished" || status === "confirmed") {
      // Webhook acknowledged - transaction state updates can be added when linked to payment-links/transactions records
    }

    return NextResponse.json({ received: true, paymentId, status });
  } catch (error) {
    console.error("NOWPayments webhook error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}