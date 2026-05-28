// NOWPayments API integration
export class NowPaymentsAPI {
  private apiKey: string;
  private baseUrl = 'https://api.nowpayments.io/v1';

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.NOWPAYMENTS_API_KEY || '';
  }

  async createInvoice(amount: number, currency: string, orderId: string, description: string) {
    const response = await fetch(`${this.baseUrl}/invoice`, {
      method: 'POST',
      headers: {
        'x-api-key': this.apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency,
        order_id: orderId,
        pay_currency: 'usdt',
        description,
      }),
    });
    return response.json();
  }

  async getPaymentStatus(paymentId: string) {
    const response = await fetch(`${this.baseUrl}/payment/${paymentId}`, {
      headers: { 'x-api-key': this.apiKey },
    });
    return response.json();
  }

  async getAvailableCurrencies() {
    const response = await fetch(`${this.baseUrl}/currencies`, {
      headers: { 'x-api-key': this.apiKey },
    });
    return response.json();
  }
}

export const nowPayments = new NowPaymentsAPI();