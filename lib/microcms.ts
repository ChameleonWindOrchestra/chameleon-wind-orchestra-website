import { createClient } from "microcms-js-sdk";

export type MicroCmsImage = {
  url: string;
  width: number;
  height: number;
};

type MicroCmsClient = ReturnType<typeof createClient>;

let cached: MicroCmsClient | null = null;

export function getMicroCmsClient(): MicroCmsClient {
  if (cached) return cached;

  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;

  if (!serviceDomain || !apiKey) {
    throw new Error(
      "MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY must be set in environment variables. " +
        "See README for setup instructions.",
    );
  }

  const client = createClient({ serviceDomain, apiKey });
  cached = client;
  return client;
}
