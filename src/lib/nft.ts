// NFT Badge contract integration for Monad
export const NFT_CONTRACT_ABI = [
  {
    name: "mintPayoutBadge",
    type: "function",
    inputs: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "txHash", type: "bytes32" }
    ],
    outputs: [{ name: "tokenId", type: "uint256" }]
  },
  {
    name: "getBadgeMetadata",
    type: "function",
    inputs: [{ name: "tokenId", type: "uint256" }],
    outputs: [{ name: "metadata", type: "string" }]
  },
  {
    name: "tokenURI",
    type: "function",
    inputs: [{ name: "tokenId", type: "uint256" }],
    outputs: [{ name: "uri", type: "string" }]
  }
] as const;

export const PAYOUT_BADGE_CONTRACT = '0x7f748f154B6D180D35fA12460C7E4C631e28A9d7';

export async function mintPayoutBadge(
  to: string,
  amount: number,
  txHash: string
): Promise<{ tokenId: string; success: boolean }> {
  // In production, this would use wagmi/contract hooks
  return {
    tokenId: Date.now().toString(),
    success: true
  };
}