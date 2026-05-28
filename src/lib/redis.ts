// Redis client stubs (requires @upstash/redis)
export const redis = {
  setex: async (_key: string, _ttl: number, _value: string) => true,
  get: async (_key: string) => null,
  incr: async (_key: string) => 1,
  expire: async (_key: string, _ttl: number) => true,
};

export async function cacheUser(fid: number, data: any): Promise<boolean> {
  return redis.setex(`user:${fid}`, 3600, JSON.stringify(data));
}

export async function getCachedUser(fid: number): Promise<any | null> {
  const data = await redis.get(`user:${fid}`);
  return data ? JSON.parse(data as string) : null;
}

export async function cachePaymentLink(slug: string, data: any): Promise<boolean> {
  return redis.setex(`link:${slug}`, 1800, JSON.stringify(data));
}

export async function rateLimit(identifier: string, limit = 10, window = 60): Promise<boolean> {
  const key = `rate:${identifier}`;
  const current = (await redis.incr(key)) as number;
  
  if (current === 1) {
    await redis.expire(key, window);
  }
  
  return current <= limit;
}