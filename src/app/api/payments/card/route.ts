import { NextRequest, NextResponse } from "next/server";
import { nowPayments } from "@/lib/nowpayments";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency = "USD", bookingId } = body;

    if (!amount) {
      return NextResponse.json({ error: "Amount is required" }, { status: 400 });
    }

    const invoice = await nowPayments.createInvoice(
      Number(amount),
      currency,
      bookingId ? `booking-${bookingId}` : `card-payment-${Date.now()}`,
      "CreatorPay card payment"
    );

    const payment = {
      id: invoice?.payment_id || `card-${Date.now()}`,
      amount,
      currency,
      status: "pending",
      invoiceUrl: invoice?.invoice_url,
    };

    return NextResponse.json(payment, { status: 201 });
  } catch (error) {
    console.error("Card payment error:", error);
    const message = error instanceof Error ? error.message : "Failed to create payment";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentId = searchParams.get("paymentId");

    if (!paymentId) {
      return NextResponse.json({ error: "Payment ID is required" }, { status: 400 });
    }

    const status = await nowPayments.getPaymentStatus(paymentId);

    return NextResponse.json({
      id: paymentId,
      status: status?.payment_status || "unknown",
      amount: status?.price_amount,
      currency: status?.pay_currency,
    });
  } catch (error) {
    console.error("Card payment status error:", error);
    return NextResponse.json({ error: "Payment not found" }, { status: 404 });
  }
}
