const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const normalizedBasePath =
  rawBasePath === "/"
    ? ""
    : rawBasePath.replace(/\/+$/, "").replace(/^([^/])/, "/$1");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: normalizedBasePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: normalizedBasePath,
  },
};

export default nextConfig;
