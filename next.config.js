module.exports = {
  reactStrictMode: false,
  images: {
    loader: 'akamai',
    path: '/',
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `http://api.alcoholic.ml:80/api/:path*`,
      },
    ]
  },
}
