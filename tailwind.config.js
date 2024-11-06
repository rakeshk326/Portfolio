/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '180px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'resume-gradient': 'linear-gradient(225deg, rgb(132, 0, 255) 0%, rgb(230, 0, 255) 100%)',
      }
    }
  },
  plugins: [],
}