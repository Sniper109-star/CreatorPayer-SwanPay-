"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function CardPaymentForm({
  amount,
  currency = "USD",
  onSuccess,
}: {
  amount: number;
  currency?: string;
  onSuccess: (result: any) => void;
}) {
  const [status, setStatus] = useState<"idle" | "processing" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePay = async () => {
    setStatus("processing");
    setErrorMessage("");

    try {
      const intentRes = await fetch("/api/payments/card", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency }),
      });

      const intentData = await intentRes.json();

      if (!intentRes.ok) {
        throw new Error(intentData.error || "Failed to initiate card payment");
      }

      setStatus("success");
      onSuccess?.(intentData);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Payment failed");
    }
  };

  return (
    <div className="space-y-3">
      <Button type="button" onClick={handlePay} disabled={status === "processing"}>
        {status === "processing" ? "Processing..." : `Pay ${amount} ${currency} with Card`}
      </Button>

      {status === "success" && (
        <p className="text-sm text-[#fbbf24]">Card payment initiated successfully.</p>
      )}

      {status === "error" && <p className="text-sm text-red-400">{errorMessage}</p>}
    </div>
  );
}
