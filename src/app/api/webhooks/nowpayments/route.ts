import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { paymentId, status, amount, currency } = body;

  if (status === 'finished' || status === 'confirmed') {
    // Process confirmed payment - update transaction record
    // This would integrate with the database
  }

  return NextResponse.json({ received: true });
}