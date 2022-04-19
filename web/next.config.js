module.exports = {
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/bio',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};
