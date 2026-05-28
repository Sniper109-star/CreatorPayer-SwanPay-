"use client";

import { SafeAreaContainer } from '@/components/SafeAreaContainer';
import { useMiniAppContext } from '@/components/FarcasterProvider';

export default function App({ children }: { children: React.ReactNode }) {
  const { context, isLoading, isSDKLoaded } = useMiniAppContext();

  if (isLoading) {
    return (
      <SafeAreaContainer insets={context?.client.safeAreaInsets}>
        <div className="flex min-h-screen flex-col items-center justify-center p-4 space-y-8">
          <h1 className="text-3xl font-bold text-center text-white">Loading...</h1>
        </div>
      </SafeAreaContainer>
    );
  }

  if (!isSDKLoaded) {
    return (
      <SafeAreaContainer insets={context?.client.safeAreaInsets}>
        <div className="flex min-h-screen flex-col items-center justify-center p-4 space-y-8">
          <h1 className="text-3xl font-bold text-center text-white">
            User Management MiniApp
          </h1>
          <div className="w-full max-w-2xl space-y-6">{children}</div>
        </div>
      </SafeAreaContainer>
    );
  }

  return (
    <SafeAreaContainer insets={context?.client.safeAreaInsets}>
      <div className="w-full max-w-2xl space-y-6 p-4">
        <h1 className="text-3xl font-bold text-center text-white">
          User Management MiniApp
        </h1>
        {context?.user && (
          <p className="text-center text-neutral-300">
            Welcome, {context.user.displayName || context.user.username}!
          </p>
        )}
        <div className="w-full max-w-2xl space-y-6">{children}</div>
      </div>
    </SafeAreaContainer>
  );
}