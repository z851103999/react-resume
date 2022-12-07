/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      module: 'empty',
      dgram: 'empty',
      dns: "mock",
      fs: 'empty',
      http2: 'empty',
      net: 'empty',
      tls: "empty",
      child_process: "empty",
      // node process 进程模块
      process: require.resolve('process/browser'),
      // node zlib
      zlib: require.resolve('browserify-zlib'),
      // stream
      stream: require.resolve("stream-browserify"),
      // utils
      util: require.resolve("util"),
      // buffer
      buffer: require.resolve("buffer"),
      // assert
      asset: require.resolve("assert"),
    }
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      })
    );
    return config
  }
}

module.exports = nextConfig
