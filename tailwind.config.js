/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {
   
    extend: {
      fontFamily: {
        redHatText: ['Red Hat Text', 'sans-serif'],
        lora:['Lora', 'serif']
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.25em',
        wider: '.5em',
        widest: '.75em',
        widest: '.9em',
      },
    },
  },
  plugins: [],
}

// font-family: 'Lora', serif;
// font-family: 'Red Hat Text', sans-serif;