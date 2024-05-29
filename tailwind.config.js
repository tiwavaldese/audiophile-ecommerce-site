/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  colors: {
    'd-dark': '#1a202c', 
    'c-white': '#ffffff', 
    'light-bg': '#F6F8FF',
    'c-light-gray' : '#486A9B',
    'm-dark' : '#1E2A47'
  },
  fontFamily:{
    poppins: ['Poppins', 'sans-serif'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

