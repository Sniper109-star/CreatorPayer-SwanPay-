"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FrameProvider } from '@/components/FarcasterProvider';
import { WalletProvider } from '@/components/WalletProvider';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        <FrameProvider>{children}</FrameProvider>
      </WalletProvider>
    </QueryClientProvider>
  );
}