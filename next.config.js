/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/app7" : "",
  env: {
    v: "1.0002",
    REACT_APP_API_PRIVATEKEY: process.env.REACT_APP_API_PRIVATEKEY,
    REACT_APP_API_HOST: process.env.REACT_APP_API_HOST,
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_APP_API_AUTH: process.env.REACT_APP_API_AUTH,
    REACT_APP_API_EPVLINK: process.env.REACT_APP_API_EPVLINK,
    REACT_APP_API_BETW: process.env.REACT_APP_API_BETW,
    REACT_APP_API_AIRFLOW: process.env.REACT_APP_API_AIRFLOW,
    REACT_APP_API_IMAGES: process.env.REACT_APP_API_IMAGES,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
