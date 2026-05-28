import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  fid: integer("fid").unique(),
  walletAddress: text("wallet_address"),
  username: text("username"),
  displayName: text("display_name"),
  email: text("email").unique(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const paymentLinks = sqliteTable("payment_links", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").references(() => users.id),
  title: text("title").notNull(),
  description: text("description"),
  amount: real("amount"),
  currency: text("currency").default("USD"),
  slug: text("slug").notNull().unique(),
  isActive: integer("is_active", { mode: "boolean" }).default(true),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const transactions = sqliteTable("transactions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").references(() => users.id),
  paymentLinkId: integer("payment_link_id").references(() => paymentLinks.id),
  amount: real("amount").notNull(),
  currency: text("currency").notNull(),
  chain: text("chain"),
  txHash: text("tx_hash"),
  status: text("status").default("pending"),
  type: text("type"),
  metadata: text("metadata"),
  nftTokenId: text("nft_token_id"),
  nftMinted: integer("nft_minted", { mode: "boolean" }).default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const nftPayoutBadges = sqliteTable("nft_payout_badges", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  transactionId: integer("transaction_id").references(() => transactions.id),
  creatorId: integer("creator_id").references(() => users.id),
  tokenId: text("token_id"),
  contractAddress: text("contract_address"),
  chain: text("chain").default("monad"),
  metadata: text("metadata"),
  imageUrl: text("image_url"),
  mintedAt: integer("minted_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const subscriptions = sqliteTable("subscriptions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").references(() => users.id),
  subscriberFid: integer("subscriber_fid"),
  tier: text("tier").notNull(),
  amount: real("amount").notNull(),
  interval: text("interval").notNull(),
  status: text("status").default("active"),
  expiresAt: integer("expires_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const tips = sqliteTable("tips", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  creatorId: integer("creator_id").references(() => users.id),
  senderFid: integer("sender_fid"),
  amount: real("amount").notNull(),
  message: text("message"),
  txHash: text("tx_hash"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const adCampaigns = sqliteTable("ad_campaigns", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").references(() => users.id),
  name: text("name").notNull(),
  budget: real("budget").notNull(),
  spent: real("spent").default(0),
  targetUrl: text("target_url"),
  status: text("status").default("draft"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export const walletBalances = sqliteTable("wallet_balances", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").references(() => users.id).unique(),
  balance: real("balance").default(0),
  currency: text("currency").default("USD"),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});