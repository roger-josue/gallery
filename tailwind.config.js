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
        bgDark: '#444655',
        bgLight: '#F7F8FF',
        primary: '#7991F5',
        secondary: '#596193',
        accent: '#8C7FDC',
        extra: '#F26C79',
        darkText: '#ECEEFF',
        lightText: '#A9AABC'
      },
      fontFamily: {
        sans: ['var(--font-roboto-flex)'],
        serif: ['var(--font-roboto-slab)'],
      },
    },
  },
  plugins: [],
}
