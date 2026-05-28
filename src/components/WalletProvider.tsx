"use client";

import { WagmiProvider, createConfig, http } from 'wagmi';
import { defineChain } from 'viem';

export const monadTestnet = defineChain({
  id: 10143,
  name: 'Monad Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'MON',
    symbol: 'MON',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet-rpc.monad.xyz/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Monad Explorer',
      url: 'https://testnet.monadexplorer.com/',
    },
  },
});

const config = createConfig({
  chains: [monadTestnet],
  connectors: [],
  ssr: true,
  transports: {
    [monadTestnet.id]: http('https://testnet-rpc.monad.xyz/'),
  },
});

export function WalletProvider({ children }: { children: React.ReactNode }) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
}

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}