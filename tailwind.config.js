/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          50: '#E8EDF4',
          100: '#C5D0E3',
          200: '#8FA1C7',
          300: '#5972AB',
          400: '#2D4A82',
          500: '#0B1F3A',
          600: '#091A31',
          700: '#071428',
          800: '#050E1F',
          900: '#030916',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FBF6E7',
          100: '#F5EAC5',
          200: '#EDD98F',
          300: '#E8C94A',
          400: '#D4AF37',
          500: '#B8952E',
          600: '#9A7B25',
          700: '#7C621C',
          800: '#5E4A14',
          900: '#40320E',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'premium-lg': '0 10px 60px rgba(0, 0, 0, 0.15)',
        'glass': '0 8px 32px rgba(11, 31, 58, 0.12)',
        'gold': '0 4px 20px rgba(212, 175, 55, 0.25)',
        'card': '0 2px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 40px rgba(11, 31, 58, 0.15)',
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #0B1F3A 0%, #071428 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #E8C94A 100%)',
        'gradient-navy-gold': 'linear-gradient(135deg, #0B1F3A 0%, #132D54 50%, #D4AF37 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(11,31,58,0.95) 0%, rgba(11,31,58,0.7) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
