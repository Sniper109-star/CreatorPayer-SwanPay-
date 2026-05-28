import { Redis } from '@upstash/redis';

// Redis client for caching and rate limiting
export const redis = new Redis({
  url: process.env.REDIS_URL || '',
  token: process.env.REDIS_TOKEN || '',
});

// Cache user data
export async function cacheUser(fid: number, data: any) {
  return redis.setex(`user:${fid}`, 3600, JSON.stringify(data));
}

export async function getCachedUser(fid: number) {
  const data = await redis.get(`user:${fid}`);
  return data ? JSON.parse(data as string) : null;
}

// Cache payment links
export async function cachePaymentLink(slug: string, data: any) {
  return redis.setex(`link:${slug}`, 1800, JSON.stringify(data));
}

// Rate limiting for API calls
export async function rateLimit(identifier: string, limit = 10, window = 60) {
  const key = `rate:${identifier}`;
  const current = (await redis.incr(key)) as number;
  
  if (current === 1) {
    await redis.expire(key, window);
  }
  
  return current <= limit;
}