module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://api.alcoholic.ml/:path*`,
      },
    ]
  },
}
