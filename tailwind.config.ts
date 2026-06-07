import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/index.html'
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 40px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
