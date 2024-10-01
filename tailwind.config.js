/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html"
  ],
  theme: {
    extend: {
      fontSize: {
        '5.5xl': '3.25rem',
      },
      fontFamily: {
        sans: ['Encode Sans', 'sans-serif']
      },
      keyframes: {
        bgSlide: {
          '0%, 50%': { 
            backgroundImage: 'url(../img/bg-3.jpg)',
            transition: 'background 4s ease'
          },
          '51%, 100%': { 
            backgroundImage: 'url(../img/bg-4.jpg)',
            transition: 'background 4s ease'
          },
        }
      },
      animation: {
        bgSlide: 'bgSlide 8s ease-in-out infinite alternate'
      }
    },
  },
  plugins: [],
}

