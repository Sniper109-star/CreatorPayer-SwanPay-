/**
 * x402 Protocol Integration
 * 
 * x402 is an open standard for internet native payments supporting all networks
 * (crypto & fiat) and forms of value (stablecoins, tokens, fiat).
 * 
 * Packages used:
 * - @x402/core: Core payment protocol
 * - @x402/evm: EVM chain support
 * - @x402/svm: Solana VM support
 * - @x402/fetch: HTTP client with x402 auto-payment
 * - @x402/next: Next.js middleware
 */

export const X402_CONFIG = {
  facilitatorUrl: process.env.X402_FACILITATOR_URL || 'https://facilitator.x402.org',
  network: 'solana-devnet',
  token: 'USDC',
};

export type PaymentScheme = 'exact' | 'upto' | 'batch-settlement';

export interface PaymentRequirement {
  scheme: PaymentScheme;
  network: string;
  maxAmount: string;
  currency: string;
  recipient: string;
}

export interface PaymentPayload {
  scheme: PaymentScheme;
  network: string;
  amount: string;
  currency: string;
  signature: string;
  publicKey: string;
}

export interface VerifyResponse {
  valid: boolean;
  error?: string;
}

export interface SettleResponse {
  success: boolean;
  transactionHash?: string;
  error?: string;
}

export async function verifyPayment(
  requirement: PaymentRequirement,
  payload: PaymentPayload
): Promise<VerifyResponse> {
  // In production, POST to facilitator /verify endpoint
  const response = await fetch(`${X402_CONFIG.facilitatorUrl}/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ requirement, payload }),
  });
  return response.json();
}

export async function settlePayment(
  requirement: PaymentRequirement,
  payload: PaymentPayload
): Promise<SettleResponse> {
  // In production, POST to facilitator /settle endpoint
  const response = await fetch(`${X402_CONFIG.facilitatorUrl}/settle`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ requirement, payload }),
  });
  return response.json();
}

export function createPaymentRequirements(
  amount: number,
  recipient: string
): PaymentRequirement[] {
  return [
    {
      scheme: 'exact',
      network: X402_CONFIG.network,
      maxAmount: amount.toString(),
      currency: X402_CONFIG.token,
      recipient,
    },
  ];
}