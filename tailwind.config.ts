import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{html,ts}', './src/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Manrope"', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        base: {
          DEFAULT: '#0D1117',
          subtle: '#161B22',
          card: '#1F2530',
        },
        accent: {
          DEFAULT: '#1E3A8A',
          soft: '#0F172A',
        },
      },
      spacing: {
        section: '5.5rem',
        'section-sm': '4rem',
        gutter: '1.5rem',
      },
      boxShadow: {
        card: '0 20px 45px rgba(15, 23, 42, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
