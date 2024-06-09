/** @type {import('next').NextConfig} */
const nextConfig = {
  rules: {
    'no-console': 'off',
    'react/prop-types': 'off',
    'some-other-rule': 'warn'
  },
  reactStrictMode: true,
}

module.exports = nextConfig
