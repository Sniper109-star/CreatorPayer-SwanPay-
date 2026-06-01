import { NextRequest, NextResponse } from "next/server";
import { verifyPHEEWebhookSignature, type PHEEWebhookPayload } from "@/lib/ph-ee";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.text();
    const signature = request.headers.get('x-ph-ee-signature') || '';

    if (!verifyPHEEWebhookSignature(payload, signature)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const event: PHEEWebhookPayload = JSON.parse(payload);

    switch (event.event) {
      case 'payment.inbound':
      case 'payment.status':
        // Here we would update the local transaction/payment status
        console.log('PH-EE inbound payment event', event);
        break;
      case 'payout.outbound':
        // Here we would mark a payout as processed/settled
        console.log('PH-EE outbound payout event', event);
        break;
      default:
        console.warn('Unhandled PH-EE event', event);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('PH-EE webhook processing failed:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', service: 'ph-ee-webhook' });
}
