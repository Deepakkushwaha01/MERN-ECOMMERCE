/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:"#FF7717",
        dash:"#2B6FFE"
      },
      fontFamily:{
        'neo':['Neometric','sans-serif']
      }
    },
  },
  plugins: [],
}
