/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
      },
      colors: {
        customBlue: '#1e2238',
        bgColor: '#eff5fa',
        splash:'#8bafd0',
      },
    },
  },
  plugins: [],
}