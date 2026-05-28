import { eq } from "drizzle-orm";
import { db } from "@/db";
import { paymentLinks } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const allLinks = await db.select().from(paymentLinks);
  return NextResponse.json(allLinks);
}

export async function POST(request: NextRequest) {
  const { userId, title, amount, currency, slug } = await request.json();
  
  if (!title || !amount) {
    return NextResponse.json({ error: "Title and amount required" }, { status: 400 });
  }
  
  try {
    const result = await db.insert(paymentLinks).values({
      userId,
      title,
      amount,
      currency: currency || "USD",
      slug: slug || `link-${Date.now()}`
    }).returning();
    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create link" }, { status: 500 });
  }
}