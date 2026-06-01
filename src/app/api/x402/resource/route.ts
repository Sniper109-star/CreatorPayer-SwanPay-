import { NextRequest, NextResponse } from "next/server";
import { verifyPayment as verifyFn, settlePayment, createPaymentRequirements } from "@/lib/x402";

export async function GET() {
  return NextResponse.json({ service: "x402-resource", status: "ok" });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { endpoint, authorization } = body;

    if (endpoint === "/api/payments/solana") {
      const requirements = createPaymentRequirements(1, process.env.NEXT_PUBLIC_COMMERCE_KIT_MERCHANT_WALLET || "");
      return NextResponse.json({ schema: "x402", accepted: requirements, version: "1" });
    }

    if (authorization?.startsWith("x402")) {
      const requirements = createPaymentRequirements(1, process.env.NEXT_PUBLIC_COMMERCE_KIT_MERCHANT_WALLET || "");
      const decoded = JSON.parse(Buffer.from(authorization.split(" ")[1], "base64").toString());
      const verification = await verifyFn(requirements[0], {
        scheme: requirements[0].scheme,
        network: requirements[0].network,
        amount: requirements[0].maxAmount,
        currency: requirements[0].currency,
        signature: decoded.signature,
        publicKey: decoded.publicKey,
      });
      if (verification.valid) {
        return NextResponse.json({ paid: true, txHash: decoded.signature });
      }
      return NextResponse.json({ paid: false, error: "invalid" }, { status: 402 });
    }

    return NextResponse.json({ error: "Missing x402 requirements" }, { status: 402 });
  } catch (err) {
    console.error("x402 resource server error", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
