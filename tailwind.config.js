/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  
  theme: {
    extend: {
      height: {
        'custom-400px': '400px',
        'custom-750px': '750px',
      },
      width: {
        'custom-700px': '700px',
        'custom-400px': '400px',
      },
      colors: {
        'd-dark': '#1a202c', 
        'c-white': '#ffffff', 
        'light-bg': '#F6F8FF',
        'c-light': '#F1F8FF',
        'c-light-gray' : '#486A9B',
        'm-dark' : '#1E2A47',
        'custom-white': 'rgba(255,255,255,1)',
        'orange-bg': '#D87D4A',
        'oranger-bg': ' #D87D4A',
        'light-gray' : '#F1F1F1',
        'white-50': 'rgba(255, 255, 255, 0.5)',
        'white-75': 'rgba(255, 255, 255, 0.75)',
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

