/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./stories/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'csgo': {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#A1ADE4',
          500: '#888BF7',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
    },
  },
  plugins: [],
}
