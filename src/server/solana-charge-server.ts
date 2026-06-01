import express from "express";
import { createSolanaPayment } from "@/lib/solana-mpp";
import { PaymentButton } from "@/components/payments/SolanaPaymentButton";

export async function startSolanaChargeServer(port = 3100) {
  const app = express();
  app.use(express.json());

  app.post("/api/v1/charge", async (req, res) => {
    const { amount, currency, orderId } = req.body;
    try {
      const payment = await createSolanaPayment(amount, orderId);
      res.setHeader("PAYMENT-REQUIRED", Buffer.from(JSON.stringify(payment)).toString("base64"));
      return res.status(402).json(payment);
    } catch (err) {
      console.error("Charge error", err);
      return res.status(500).json({ error: "Payment initialization failed" });
    }
  });

  app.get("/api/v1/success", (_req, res) => res.json({ ok: true }));
  app.get("/api/v1/health", (_req, res) => res.json({ service: "solana-charge", status: "up" }));

  app.listen(port, () => console.log(`Solana charge server running on :${port}`));
}
