/** @type {import('tailwindcss').Config} */
export default {
  // 1. Mapeo de rutas: Le indicamos a Tailwind qué archivos debe vigilar
  content: [
    "./index.html"
  ],

  // 2. Configuración de Modo Oscuro basada en clases
  darkMode: 'class',

  // 3. Migración de tu Theme personalizado
  theme: {
    extend: {
      colors: {
        crimson: {
          50:  '#feeded',
          100: '#fdd4d4',
          200: '#fcadab',
          300: '#fb8684',
          400: '#fb5a56',
          500: '#f1261a',
          600: '#d01f15',
          700: '#a4160e',
          800: '#740d07',
          900: '#440402',
          950: '#2b0201',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        italic:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.9s ease forwards',
        'fade-in':    'fadeIn 1.2s ease forwards',
        'slide-left': 'slideLeft 0.8s ease forwards',
      },
      keyframes: {
        fadeUp:    { '0%': { opacity: '0', transform: 'translateY(32px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:    { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideLeft: { '0%': { opacity: '0', transform: 'translateX(-24px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
      }
    },
  },
  plugins: [],
}