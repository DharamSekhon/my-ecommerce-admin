/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#5542F6',
        primary:'#001d3d',
        highlight: '#eae8fb',
        bgGray: '#fbfafd',
        bgDefault:'#fb8500',
        bgAdmin: '#22223B',
        bgTile:'#F2E9E4',
        bgSilver:'#fff',
        bgText:'#4A4E69',
        one:'#4A4E69',
        two:'#22223B',
        three:'#9A8C98'
        
      }
    },
  },
  plugins: [],
}

