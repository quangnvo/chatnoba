/** @type {import('next').NextConfig} */
const nextConfig = {
    // This part to allow images from github to be used in the app
    images: {
        domains: ['github.com', "lh3.googleusercontent.com"],
    }
}

module.exports = nextConfig
