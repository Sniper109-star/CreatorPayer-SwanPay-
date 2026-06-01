import { eq } from "drizzle-orm";
import { db } from "@/db";
import { paymentLinks } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { nowPayments } from "@/lib/nowpayments";

export async function GET() {
  try {
    const allLinks = await db.select().from(paymentLinks);
    return NextResponse.json(allLinks);
  } catch (error) {
    console.error("Failed to fetch payment links:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, title, amount, currency, slug, creatorId } = body;

    if (!title || !amount) {
      return NextResponse.json({ error: "Title and amount required" }, { status: 400 });
    }

    const result = await db.insert(paymentLinks).values({
      userId: creatorId || userId,
      title,
      amount,
      currency: currency || "USD",
      slug: slug || `link-${Date.now()}`,
    }).returning();

    try {
      const invoice = await nowPayments.createInvoice(
        amount,
        "USD",
        result[0].id.toString(),
        title
      );
      return NextResponse.json({ ...result[0], invoice }, { status: 201 });
    } catch (invoiceError) {
      console.warn("NOWPayments invoice creation failed, returning link without invoice:", invoiceError);
      return NextResponse.json(result[0], { status: 201 });
    }
  } catch (error) {
    console.error("Failed to create payment link:", error);
    return NextResponse.json({ error: "Failed to create link" }, { status: 500 });
  }
}