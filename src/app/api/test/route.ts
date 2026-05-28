import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    endpoints: {
      users: "/api/users",
      paymentLinks: "/api/payment-links",
      transactions: "/api/transactions"
    }
  });
}

export async function POST(request: NextRequest) {
  const { action, target } = await request.json();
  
  if (action === "health-check") {
    return NextResponse.json({ healthy: true });
  }
  
  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}