/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  
  theme: {
    extend: {
      height: {
        '400': '400px',
        '300': '300px',
        '700': '700px',
        '750': '750px',
        '230': '230px',
        '600': '600px',
        '650': '650px',
        '510': '510px',
        '500': '500px',
        '21': '21px',
      },
      width: {
        '700': '700px',
        '400': '400px',
        '200': '200px',
        '110': '110px',
        '130': '130px',
        '550': '550px',
        '500': '500px',
        '50': '50',
        '55': '55',

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

