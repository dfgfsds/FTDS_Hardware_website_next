/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          '0%': { opacity: '0.9', transform: 'rotate(90deg)' },
          '100%': { opacity: '0', transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        fadeOut: 'fadeOut 2s ease-in-out forwards',
      },
    },
  },
  
  plugins: [],
};

