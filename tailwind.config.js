/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        screens:{
          sm:'480px',
          md:'768px',
          lg:'976px',
          xl:'1440px'
        },
        colors: {
            main_color: '#EE885E',
            sec_color:'#FEE8B2',
            my_blue:'#0D699D',
        },
        fontFamily: {
            Cairo: ['Cairo', 'sans-serif'],
        },
        backgroundImage: {

        }
    }
},
  plugins: ['tailwindcss-rtl'],
}
