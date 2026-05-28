import { eq } from "drizzle-orm";
import { db } from "@/db";
import { paymentLinks, transactions } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { nowPayments } from "@/lib/nowpayments";

export async function GET() {
  const allLinks = await db.select().from(paymentLinks);
  return NextResponse.json(allLinks);
}

export async function POST(request: NextRequest) {
  const { userId, title, amount, currency, slug, creatorId } = await request.json();
  
  if (!title || !amount) {
    return NextResponse.json({ error: "Title and amount required" }, { status: 400 });
  }
  
  try {
    const result = await db.insert(paymentLinks).values({
      userId: creatorId || userId,
      title,
      amount,
      currency: currency || "USD",
      slug: slug || `link-${Date.now()}`
    }).returning();
    
    const invoice = await nowPayments.createInvoice(
      amount,
      "USD",
      result[0].id.toString(),
      title
    );
    
    return NextResponse.json({ ...result[0], invoice }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create link" }, { status: 500 });
  }
}