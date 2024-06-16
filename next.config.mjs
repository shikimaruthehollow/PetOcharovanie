/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => [
    {
      source: "/",
      destination: "/main",
      permanent: true,
    },
  ],
  images: {
    remotePatterns: [{ hostname: "jwwwafwchqevyladdclp.supabase.co" }],
  },
};

export default nextConfig;
