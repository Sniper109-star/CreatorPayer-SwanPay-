/**
 * Kill Bill API Integration
 * 
 * Kill Bill is an open-source subscription billing & payments platform.
 * CreatorPay integrates with Kill Bill for:
 * - Subscription lifecycle (create, cancel, pause)
 * - Invoice generation and billing
 * - Payment method management
 * - Usage tracking for metered billing
 * 
 * API docs: https://docs.killbill.io
 */

export const KILLBILL_CONFIG = {
  apiUrl: process.env.KILLBILL_API_URL || 'http://localhost:8080/killbill',
  apiKey: process.env.KILLBILL_API_KEY || '',
  tenant: process.env.KILLBILL_TENANT || 'creatorpay',
};

export interface KillBillSubscription {
  subscriptionId: string;
  bundleId: string;
  productName: string;
  phase: string;
  recurringBillingPeriod: string;
  priceListName: string;
  canceled?: boolean;
  chargedThroughDate: string;
  state: string;
}

export interface KillBillInvoice {
  invoiceId: string;
  accountId: string;
  balance: number;
  currency: string;
  invoiceDate: string;
  dueDate: string;
  payments: Array<{ amount: number; currency: string }>;
}

export interface KillBillAccount {
  accountId: string;
  name: string;
  email: string;
  timeZone: string;
  currency: string;
  paymentMethodIds: string[];
}

export async function createKillBillAccount(
  name: string,
  email: string,
  currency = 'USD'
): Promise<KillBillAccount> {
  // In production: POST to Kill Bill REST API /1.0/kb/accounts
  return {
    accountId: `kb_${Date.now()}`,
    name,
    email,
    timeZone: 'UTC',
    currency,
    paymentMethodIds: [],
  };
}

export async function createSubscription(
  accountId: string,
  productName: string,
  priceListName: string,
  recurringBillingPeriod = 'MONTHLY'
): Promise<KillBillSubscription> {
  // In production: POST to Kill Bill REST API /1.0/kb/subscriptions
  return {
    subscriptionId: `sub_${Date.now()}`,
    bundleId: `bundle_${Date.now()}`,
    productName,
    phase: 'TRIAL',
    recurringBillingPeriod,
    priceListName,
    chargedThroughDate: new Date().toISOString(),
    state: 'TRIAL',
  };
}

export async function cancelSubscription(
  subscriptionId: string
): Promise<{ success: boolean }> {
  // In production: POST to Kill Bill REST API /1.0/kb/subscriptions/{subscriptionId}/cancel
  return { success: true };
}

export async function getInvoices(accountId: string): Promise<KillBillInvoice[]> {
  // In production: GET from Kill Bill REST API /1.0/kb/invoices
  return [];
}