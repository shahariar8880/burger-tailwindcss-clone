/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
    extend : {
        colors: {
        primarycolor : '#010a5e',
        primarycolorlight : '#010d78',
        secondarycolor : '#FFCC00',
        pharagraphcolor : '#c0c0c0',
        whitecolor : '#fff',
        blackcolor : '#000',
        Greencolor : '#007936',
        redcolor : '#010a5e',
        darkcolor : '#000',
        darkcolorlight : '#171717',
      }
    },
    
    container : {
      center : true,
      padding :{
        default : '1rem',
        sm: '1.5rem'
      }

    },

    fontFamily : {
      oswald: ['oswald', 'sans-serif'],
      dmsans: ['DM Sans', 'sans-serif']
    },
  },
  plugins: [],
}