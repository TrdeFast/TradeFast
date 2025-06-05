// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        accent: '#F59E0B'
      },
      borderRadius: {
        xl: '1rem'
      }
    },
  },
  plugins: [],
}
