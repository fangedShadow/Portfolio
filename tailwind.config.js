/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainRed':'#8d0022',
        'darkRed':'#750b24',
        'redBlack': '#0d1116',
        'greyWhite': '#cfdcd7',
        'darkGreyWhite': '#a1a7ab',
        'darkGrey':'#7c7d84',
        'hoverBlack' : '#161d25'

      },
      fontFamily: {
        tar: ['"Goudy Trajan"',]
      },
      keyframes: {
        enlarge: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        'enlarge-text': 'enlarge 0.3s ease-in-out forwards',
        'flip-card': 'flip 1.75s ease-in-out forwards',

      },
    },
  },
  plugins: [],
};
