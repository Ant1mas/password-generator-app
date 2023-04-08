const withPWA = require("next-pwa")

const pwaCaching = require("./pwa-caching")

module.exports = {
  basePath: '',
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  // pwa: {
  //   dest: "public",
  //   register: true,
  //   dynamicStartUrl: false,
  //   runtimeCaching: pwaCaching,
  //   disable: process.env.NODE_ENV === "development",
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
