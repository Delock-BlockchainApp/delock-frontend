import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'xxs': '7px',
        'xs': '10px',
        'sm': '12px',
        'md': '14px', 
        'lg': '16px',
        'xl': '20px',
        '2xl': '25px',
        '3xl': '30px',
        '4xl': '40px',
        
      },
      colors: {
        'bold-blue': '#022A51',
        'dark-blue': '#004182',
        'light-blue': '#EBF3FC',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
        caveat: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
  ],
}