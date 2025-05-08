// next.config.js
module.exports = {
  images: {
    domains: ['res.cloudinary.com'], // Add your image host here
    // OR use remotePatterns for more control:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // Optionally, you can specify pathname and port
      },
    ],
  },
}