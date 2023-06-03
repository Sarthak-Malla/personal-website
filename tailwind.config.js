/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#27374D',
        },
        secondary: {
          DEFAULT: '#526D82',
        },
        tertiary: {
          DEFAULT: '#9DB2BF',
        },
        quaternary: {
          DEFAULT: '#DDE6ED',
        },
        darker: {
          DEFAULT: '#000000',
        },
      },
    },
  },
  plugins: [],
}
