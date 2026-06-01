import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { itemId, date, guests, totalAmount, currency } = body;

    if (!itemId || !date || !guests || !totalAmount) {
      return NextResponse.json({ error: "Missing booking fields" }, { status: 400 });
    }

    const booking = {
      id: `BOOK-${Date.now()}`,
      itemId,
      date,
      guests: Number(guests),
      totalAmount: Number(totalAmount),
      currency: currency || "USD",
      status: "pending",
      method: "card",
    };

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error("Booking creation error:", error);
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ items: [] });
}
