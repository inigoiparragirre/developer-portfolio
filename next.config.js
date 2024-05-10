const path = require('path')
 
module.exports = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "": undefined,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com', 'media.dev.to']
  }
}