/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: '#000',
      backgroundContrast: '#111',
      black: '#1d1d1f',
      white: '#fff'
    },
    fontFamily: {
      sans: ['SF Pro Display', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1.0625rem', // 17px
      lg: ['1.1875rem', '1.21'], // 19px
      xl: '1.3125rem', // 21px
      '2xl': '1.5rem', // 24px
      '3xl': ['1.75rem', '1.29'], // 28px
      '4xl': ['2.25rem', '1.1'], // 36px
      '5xl': ['2.75rem', '1.08'], // 44px
      '6xl': ['3.875rem', '1.0625'], // 62px
      '7xl': ['4.5rem', '1.05'] // 72px
    },
    keyframes: {
      'carousel-move': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' }
      }
    },
    animation: {
      'carousel-move': 'carousel-move var(--duration,80s) infinite'
    },
    extend: {
      screens: {
        xs: '480px',
        '2xl': '1400px'
      }
    }
  },
  plugins: []
}
