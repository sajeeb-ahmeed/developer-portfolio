/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0d12',
        panel: '#12151c',
        accent: '#6ee7b7',
        accent2: '#818cf8',
      },
      fontFamily: {
        display: ['"Clash Display"', '"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 20%, rgba(110,231,183,0.15), transparent 40%), radial-gradient(circle at 80% 0%, rgba(129,140,248,0.15), transparent 40%)',
      },
    },
  },
  plugins: [],
};
