/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{php,html,js}"],
  theme: {
    fontFamily: {
      sans: [
        'Aller, sans-serif',
      ],
      title: [
        'Merriweather, sans-serif',
      ]
    },
    extend: {
      colors: {
        'white': '#FFFFFF',
        'white-100': '#F4F4F4',
        'brand': '#eb6608',
        'brand-hover': '#c35100',
        'blue': '#0090d1',
        'black': '#2C2C2C',
        'black-100': '#444647',
        'green-whatspp': '#25D366',
      },
      spacing: {
        'screen': '100dvw',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #191919 0%, #1C1A1D 25%, #211B20 50%, #261C21 75%, #2C1D20 100%)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          xl: '1220px',
        }
      }
    }
  }
}

