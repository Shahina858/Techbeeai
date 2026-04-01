/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: '#f5b800',
        cyan: '#00e5ff',
        dark: '#0a0a0f',
        dark2: '#0d0d14',
        card: 'rgba(255,255,255,0.04)',
        muted: 'rgba(255,255,255,0.5)',
      },
    },
  },
  plugins: [],
}
