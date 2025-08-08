import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@radix-ui/react-dialog"],
  },
  env: {
    NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    NEXT_PUBLIC_PT_CHECKOUT_WEBHOOK: process.env.PT_CHECKOUT_WEBHOOK,
  },
};

export default nextConfig;
