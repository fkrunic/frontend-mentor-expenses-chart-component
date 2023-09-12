/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      desktop: '1440px'
    },
    colors: {
      'soft-red': 'hsl(10, 79%, 65%)',
      'soft-red-light': 'hsl(10, 79%, 75%)',
      cyan: 'hsl(186, 34%, 60%)',
      'cyan-light': 'hsl(186, 34%, 70%)',
      'dark-brown': 'hsl(25, 47%, 15%)',
      'medium-brown': 'hsl(28, 10%, 53%)',
      cream: 'hsl(27, 66%, 92%)',
      'very-pale-orange': 'hsl(33, 100%, 98%)',
      white: 'hsl(0, 0%, 100%)'
    }, 
    fontFamily: {
      'dm-sans': 'DM Sans, sans-serif'
    },
    extend: {},
  },
  plugins: [],
}

