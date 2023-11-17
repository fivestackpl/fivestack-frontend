/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        // config.externals = []

        return config
    },
    headers: () => {
        return [
            {
                source: "/*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "max-age=31536000"
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
