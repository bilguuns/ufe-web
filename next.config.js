/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    // images: {
    //     path: "https://api.ufe.edu.mn/"
    //     // domains: ["https://api.ufe.edu.mn/"],
    // },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
}

module.exports = nextConfig
