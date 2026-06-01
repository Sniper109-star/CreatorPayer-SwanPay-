import { Connection, PublicKey, SystemProgram, LAMPORTS_PER_SOL, Keypair, Transaction } from "@solana/web3.js";

export async function getSolanaBalance(publicKey: string): Promise<number> {
  const conn = new Connection(process.env.SOLANA_RPC_URL || "https://api.devnet.solana.com", "confirmed");
  const balance = await conn.getBalance(new PublicKey(publicKey));
  return balance / LAMPORTS_PER_SOL;
}

export async function sendSolanaPayment(to: string, amountSol: number, secretKey: Uint8Array): Promise<string> {
  const conn = new Connection(process.env.SOLANA_RPC_URL || "https://api.devnet.solana.com", "confirmed");
  const keypair = Keypair.fromSecretKey(secretKey);
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: keypair.publicKey,
      toPubkey: new PublicKey(to),
      lamports: Math.floor(amountSol * LAMPORTS_PER_SOL),
    })
  );
  const signature = await conn.sendTransaction(transaction, [keypair]);
  await conn.confirmTransaction(signature);
  return signature;
}

export async function getJupiterQuote(inputMint: string, outputMint: string, amount: number) {
  const url = new URL("https://quote-api.jup.ag/v6/quote");
  url.searchParams.set("inputMint", inputMint);
  url.searchParams.set("outputMint", outputMint);
  url.searchParams.set("amount", String(amount));
  url.searchParams.set("slippageBps", "50");
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Jupiter quote failed");
  return res.json();
}

export async function createJupiterSwapTransaction(quoteResponse: any, userPublicKey: string) {
  const url = new URL("https://quote-api.jup.ag/v6/swap");
  const body = {
    quoteResponse,
    userPublicKey,
    wrapAndUnwrapSol: true,
  };
  const res = await fetch(url.toString(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Jupiter swap tx creation failed");
  return res.json();
}
