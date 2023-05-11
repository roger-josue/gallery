/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#202020',
        bgLight: '#ECEEFF',
        primary: '#7991F5',
        secondary: '#596193',
        accent: '#8C7FDC',
        extra: '#F26C79',
        darkText: '#ECEEFF',
        lightText: '#A2A2B2'
      },
      fontFamily: {
        sans: ['var(--font-roboto-flex)'],
        serif: ['var(--font-roboto-slab)'],
      },
    },
  },
  plugins: [],
}
