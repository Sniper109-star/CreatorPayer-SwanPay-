# Monad User Management MiniApp

A full-stack Farcaster MiniApp with user management capabilities, built on Next.js 16, TypeScript, Tailwind CSS 4, and integrated with Monad blockchain.

## Features

- ✅ Full-stack user management (CRUD operations)
- ✅ Farcaster MiniApp SDK integration
- ✅ Wallet connection support via Wagmi/Viem
- ✅ SQLite database with Drizzle ORM
- ✅ Responsive UI with Tailwind CSS
- ✅ TypeScript strict mode
- ✅ Ready for deployment on Vercel

## Tech Stack

- **Framework**: Next.js 16 + App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: SQLite with Drizzle ORM
- **Blockchain**: Monad Testnet (Wagmi + Viem)
- **Farcaster SDK**: @farcaster/miniapp-sdk
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- Bun installed (`curl -fsSL https://bun.sh/install | bash`)
- Node.js 20+ for compatibility

### Installation

```bash
bun install
```

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
NEXT_PUBLIC_URL=http://localhost:3000
# DB_URL and DB_TOKEN are provided by sandbox environment
```

### Development

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Database

Generate migrations:

```bash
bun db:generate
```

Migrations run automatically in the sandbox after push.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with Providers
│   ├── page.tsx             # User management page
│   └── api/
│       └── users/
│           └── route.ts     # CRUD API endpoints
├── components/
│   ├── ui/
│   │   ├── Button.tsx       # Reusable button component
│   │   └── Input.tsx        # Reusable input component
│   ├── FarcasterProvider.tsx # MiniApp SDK context
│   ├── WalletProvider.tsx   # Wagmi wallet provider
│   ├── SafeAreaContainer.tsx # Safe area handling
│   └── App.tsx              # Main app wrapper
├── db/
│   ├── schema.ts            # Database schema
│   ├── index.ts             # Database client
│   ├── migrate.ts           # Migration script
│   └── migrations/          # Generated migrations
└── lib/
    └── constants.ts         # App constants
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/users | Get all users |
| POST | /api/users | Create new user |
| PUT | /api/users | Update user |
| DELETE | /api/users | Delete user |

## Farcaster MiniApp Integration

### Frame Configuration

The app includes Farcaster Frame support. Configure in `src/app/.well-known/farcaster.json/route.ts`:

```typescript
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
    homeUrl: appUrl,
    imageUrl: `${appUrl}/opengraph.png`,
    tags: ["monad", "farcaster", "miniapp"],
    primaryCategory: "developer-tools",
    buttonTitle: "Launch App",
    splashImageUrl: `${appUrl}/splash.png`,
    splashBackgroundColor: "#171717",
  }
};
```

### Using the MiniApp Context

```tsx
import { useMiniAppContext } from '@/components/FarcasterProvider';

function MyComponent() {
  const { context, actions, isLoading } = useMiniAppContext();
  
  // Access user info
  const user = context?.user;
  
  // Call Farcaster actions
  const addFrame = () => actions?.addFrame();
  
  return <div>{user?.displayName}</div>;
}
```

## Wallet Integration

The app includes wallet support for Monad Testnet:

```tsx
import { useConnect, useAccount } from 'wagmi';
import { monadTestnet } from 'viem/chains';

function WalletButton() {
  const { connect } = useConnect();
  const { address } = useAccount();
  
  return <button onClick={() => connect({ chainId: monadTestnet.id })}>Connect</button>;
}
```

## Build and Deploy

```bash
# Type check
bun typecheck

# Lint
bun lint

# Build for production
bun build
```

Deploy to Vercel or any platform supporting Next.js.

## Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "typecheck": "tsc --noEmit",
  "db:generate": "drizzle-kit generate",
  "db:migrate": "bun run src/db/migrate.ts"
}
```

## License

MIT