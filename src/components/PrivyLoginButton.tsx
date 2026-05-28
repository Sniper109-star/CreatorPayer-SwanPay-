"use client";

import { usePrivy } from '@privy-io/react-auth';

export function PrivyLoginButton() {
  const { login, authenticated, user, logout } = usePrivy();

  if (authenticated && user) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-[#fef3c7] text-sm">
          {user.email?.address || user.wallet?.address?.slice(0, 6) + '...'}
        </span>
        <button
          onClick={logout}
          className="bg-[#f59e0b] text-[#1a1107] px-3 py-1 rounded text-xs font-bold"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={login}
      className="bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] text-[#1a1107] px-4 py-2 rounded font-bold"
    >
      Connect Wallet
    </button>
  );
}