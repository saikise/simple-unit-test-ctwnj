/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Reference: https://nextjs.org/docs/app/building-your-application/configuring/eslint#linting-custom-directories-and-files
        // Include __tests__ in the default list of directories.
        dirs: ["pages", "app", "components", "lib", "src", "__tests__"],
    },
};

module.exports = nextConfig;
