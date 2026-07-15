/** @type {import('next').NextConfig} */
const repoName = 'kryzenverse';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubActions ? `/${repoName}` : '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
