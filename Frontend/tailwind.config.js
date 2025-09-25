/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specify the paths to your components
  ],
  theme: {
    extend: {
      fontFamily: {
        milonga: ['Milonga', 'sans-serif'],
        megrim: ['Megrim', 'sans-serif'],
        prata: ['Prata', 'serif'],
        quando: ['Quando', 'serif'], // Define the Quando font family
        sansita: ['"Sansita One"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'], 
        prata: ['Prata', 'serif'],
        quando: ['Quando', 'serif'],


      },
      fontSize: {
        '96px': '96px',
        '20px': '20px', // Added 20px font size
      },
      lineHeight: {
        '96px': '96px',
        '54px': '54px', // Added 54px line height
      },
      colors: {
        customGreen: '#005A4E',
      },
    },
  },
  plugins: [],
};
