import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          neon: '#f4f53c',
        },
      },
      fontFamily: {
        sans: ['var(--font-barlow)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
