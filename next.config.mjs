/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sajjadalgburi.dev" }],
        destination: "https://sajjadalgburi.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
