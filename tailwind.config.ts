/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:["class"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
        inter: ["var(--font-Josefin"],
      },
      backgroundImage: {
        'gradient-radial':'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
          lightGray: '#D3D3D3',
          purple:'#6842EF',
          primaryorange: '#FF5722',
          primaryColor: "#8873ef",
          headingcolor: "#081e21",
          smallTextColor: "#193256",
          primary: '#14b8a6',
          secondary: '#64748b',
          dark: '#0f172a',
          
          
      },
      screens:{
        "1000px":"1000px",
        "1100px":"1100px",
        "1200px":"1200px",
        "1300px":"1300px",
        "1500px":"1500px",
        "800px":"800px", 
        "400px":"400px",
      }
    },
  },
  plugins: [],
}