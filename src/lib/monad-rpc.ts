// Monad RPC client for onchain operations
export const monadTestnet = {
  id: 10143,
  name: 'Monad Testnet',
} as const;

// Smart contract addresses
export const CONTRACTS = {
  paymentRouter: '0x7f748f154B6D180D35fA12460C7E4C631e28A9d7',
  treasury: '0x7f748f154B6D180D35fA12460C7E4C631e28A9d7',
};

// These would be used with wagmi hooks in the frontend
export function useMonadBalance(address?: string) {
  // Returns balance using wagmi useBalance hook
  return { balance: '0', isLoading: false };
}

export function useSendMonadPayment() {
  // Returns send transaction using wagmi useSendTransaction
  return { sendTransaction: async () => ({ hash: null }), isLoading: false };
}