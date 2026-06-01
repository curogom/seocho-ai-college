import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#172026',
        paper: '#f8faf7',
        line: '#d8ded4',
        moss: '#3f6f5c',
        rust: '#a75535',
        gold: '#b68a2c',
        skyglass: '#dbeafe',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Pretendard',
          'ui-sans-serif',
          'system-ui',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 12px 28px rgba(23, 32, 38, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
