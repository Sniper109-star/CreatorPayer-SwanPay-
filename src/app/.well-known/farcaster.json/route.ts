import { NextResponse } from "next/server";

const appUrl = process.env.NEXT_PUBLIC_URL || process.env.NEXT_PUBLIC_VERCEL_URL;

const farcasterConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: ""
  },
  frame: {
    version: "1",
    name: "Monad User Management MiniApp",
    iconUrl: `${appUrl}/favicon.ico`,
    homeUrl: `${appUrl}`,
    imageUrl: `${appUrl}/opengraph.png`,
    screenshotUrls: [],
    tags: ["monad", "farcaster", "miniapp", "users"],
    primaryCategory: "developer-tools",
    buttonTitle: "Launch App",
    splashImageUrl: `${appUrl}/splash.png`,
    splashBackgroundColor: "#171717",
  }
};

export async function GET() {
  return NextResponse.json(farcasterConfig);
}