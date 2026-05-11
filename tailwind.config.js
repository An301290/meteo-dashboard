/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: 'hsl(var(--color-neutral-0) / <alpha-value>)',
          200: 'hsl(var(--color-neutral-200) / <alpha-value>)',
          300: 'hsl(var(--color-neutral-300) / <alpha-value>)',
          600: 'hsl(var(--color-neutral-600) / <alpha-value>)',
          700: 'hsl(var(--color-neutral-700) / <alpha-value>)',
          800: 'hsl(var(--color-neutral-800) / <alpha-value>)',
          900: 'hsl(var(--color-neutral-900) / <alpha-value>)',
        },
        orange: {
          500: 'hsl(var(--color-orange-500) / <alpha-value>)',
        },
        blue: {
          500: 'hsl(var(--color-blue-500) / <alpha-value>)',
          700: 'hsl(var(--color-blue-700) / <alpha-value>)',
        },
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui'],
        display: ['Bricolage Grotesque', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
