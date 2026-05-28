import { MobileNav } from "@/components/MobileNav";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-neutral-900 pb-20">
      <header className="bg-neutral-800 p-4 border-b border-neutral-700 flex items-center">
        <Link href="/" className="text-neutral-400 mr-3">←</Link>
        <h1 className="text-xl font-bold text-white">Profile</h1>
      </header>

      <main className="p-4 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-neutral-700 rounded-full" />
          <div>
            <h2 className="text-xl font-bold text-white">Creator Name</h2>
            <p className="text-neutral-400">@username</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-neutral-800 p-3 rounded-xl">
            <div className="font-bold text-white">12</div>
            <div className="text-neutral-400 text-xs">Links</div>
          </div>
          <div className="bg-neutral-800 p-3 rounded-xl">
            <div className="font-bold text-white">$124</div>
            <div className="text-neutral-400 text-xs">Earned</div>
          </div>
          <div className="bg-neutral-800 p-3 rounded-xl">
            <div className="font-bold text-white">5</div>
            <div className="text-neutral-400 text-xs">Supporters</div>
          </div>
        </div>

        <div className="space-y-2">
          <Link href="/subscriptions" className="block bg-neutral-800 p-4 rounded-xl">
            <div className="font-semibold text-white">My Subscriptions</div>
          </Link>
          <Link href="/tips" className="block bg-neutral-800 p-4 rounded-xl">
            <div className="font-semibold text-white">Tips Received</div>
          </Link>
          <Link href="/settings" className="block bg-neutral-800 p-4 rounded-xl">
            <div className="font-semibold text-white">Settings</div>
          </Link>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}