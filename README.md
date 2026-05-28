# CreatorPay - Crypto Native Payments for Creators

Fast, low-fee onchain infrastructure for creator payments, gifts, subscriptions, and ads on Monad and Solana.

## Features

- ✅ **Payment Links** - Create shareable crypto payment links
- ✅ **Crypto Checkout** - Accept payments in multiple cryptocurrencies
- ✅ **Creator Gifting/Tipping** - Fan-to-creator support payments
- ✅ **Ad Campaign Funding** - Pay for TikTok coins, Facebook/Twitter ads with crypto
- ✅ **Subscriptions** - Recurring creator monetization
- ✅ **Wallet Balance** - Track and manage funds
- ✅ **Payment Analysis** - Transaction history and analytics
- ✅ **Real-time Notifications** - Instant payment alerts
- ✅ **Farcaster MiniApp SDK** - Native social integration
- ✅ **Mobile-First UI/UX** - Optimized for mobile experience

## Tech Stack

- **Framework**: Next.js 16 + App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 (mobile-first)
- **Database**: SQLite with Drizzle ORM
- **Blockchain**: Monad Testnet + Solana
- **Farcaster SDK**: @farcaster/miniapp-sdk
- **API Testing**: Playwright + Chrome DevTools MCP
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- Bun installed (`curl -fsSL https://bun.sh/install | bash`)
- Node.js 20+ for compatibility

### Installation

```bash
bun install
cp .env.example .env.local
```

### Environment Variables

```env
NEXT_PUBLIC_URL=http://localhost:3000
# DB_URL and DB_TOKEN are provided by sandbox environment
```

### Development

```bash
bun dev
bun test:e2e  # Run mobile UI tests
```

### Database

```bash
bun db:generate  # Generate migrations
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with Providers
│   ├── page.tsx             # Dashboard
│   ├── globals.css          # Global styles
│   ├── payments/            # Payments section
│   ├── wallet/              # Wallet section
│   ├── profile/             # Profile section
│   ├── tips/                # Tipping interface
│   ├── subscriptions/       # Subscription management
│   ├── ads/                 # Ad campaigns
│   └── api/                 # REST API endpoints
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── FarcasterProvider.tsx
│   ├── WalletProvider.tsx
│   ├── SafeAreaContainer.tsx
│   ├── MobileNav.tsx
│   └── App.tsx
├── db/                      # Database schema and client
└── lib/                     # Utilities
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET/POST | /api/users | User management |
| GET/POST | /api/payment-links | Payment link CRUD |
| GET/POST | /api/transactions | Transaction history |
| GET/POST | /api/tips | Tip management |
| GET/POST | /api/subscriptions | Subscription CRUD |
| GET | /api/test | Health check |

## Mobile Testing with Chrome DevTools MCP

The project integrates Chrome DevTools MCP v1.1.0 for automated mobile testing:

```json
// .mcp.json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "@chromedevtools/chrome-devtools-mcp@1.1.0"]
    }
  }
}
```

Run tests:
```bash
bun test:e2e
```

## Build and Deploy

```bash
bun typecheck && bun lint && bun build
```

## Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "lint": "eslint",
  "typecheck": "tsc --noEmit",
  "db:generate": "drizzle-kit generate",
  "test:e2e": "playwright test",
  "test:e2e:ui": "playwright test --ui"
}
```

## License

MIT