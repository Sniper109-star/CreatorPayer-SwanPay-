import { NextRequest, NextResponse } from "next/server";
import { createPaymentIntent, retrievePaymentIntent } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency = "usd", bookingId } = body;

    if (!amount) {
      return NextResponse.json({ error: "Amount is required" }, { status: 400 });
    }

    const metadata: Record<string, string> = {
      source: "creatorpay",
      ...(bookingId ? { bookingId: String(bookingId) } : {}),
    };

    const paymentIntent = await createPaymentIntent(Math.round(Number(amount) * 100), currency, metadata);

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    }, { status: 201 });
  } catch (error) {
    console.error("Stripe payment intent error:", error);
    const message = error instanceof Error ? error.message : "Failed to create payment intent";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentIntentId = searchParams.get("paymentIntentId");

    if (!paymentIntentId) {
      return NextResponse.json({ status: "error", message: "paymentIntentId is required" }, { status: 400 });
    }

    const paymentIntent = await retrievePaymentIntent(paymentIntentId);
    return NextResponse.json({
      id: paymentIntent.id,
      status: paymentIntent.status,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    });
  } catch (error) {
    console.error("Stripe retrieve error:", error);
    return NextResponse.json({ error: "Payment intent not found" }, { status: 404 });
  }
}
