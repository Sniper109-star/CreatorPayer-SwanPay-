"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PrivyProvider } from '@privy-io/react-auth';
import { FrameProvider } from '@/components/FarcasterProvider';
import { WalletProvider } from '@/components/WalletProvider';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
      config={{
        appearance: {
          theme: 'dark',
          accentColor: '#f59e0b',
        }
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WalletProvider>
          <FrameProvider>{children}</FrameProvider>
        </WalletProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}