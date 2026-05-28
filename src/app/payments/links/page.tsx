"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { MobileNav } from "@/components/MobileNav";

export default function PaymentLinksPage() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);
    // API call to create payment link
    setTimeout(() => setIsCreating(false), 1000);
  };

  return (
    <div className="min-h-screen bg-neutral-900 pb-20">
      <header className="bg-neutral-800 p-4 border-b border-neutral-700">
        <h1 className="text-xl font-bold text-white">Payment Links</h1>
      </header>

      <main className="p-4 space-y-6">
        <form onSubmit={handleCreate} className="space-y-4">
          <Input
            label="Link Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., TikTok Coins, Ad Budget"
            required
          />
          <Input
            label="Amount (USD)"
            name="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            required
          />
          <Button type="submit" disabled={isCreating} className="w-full">
            {isCreating ? "Creating..." : "Create Payment Link"}
          </Button>
        </form>

        <div className="space-y-3">
          <h3 className="font-semibold text-white">Your Links</h3>
          <div className="text-center text-neutral-400 py-8">
            No payment links yet. Create your first one above!
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}