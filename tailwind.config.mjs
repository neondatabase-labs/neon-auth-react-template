export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      black: {
        DEFAULT: '#1a1a1a',
        new: '#0c0d0d',
        pure: '#000000',
      },
      white: '#ffffff',
      primary: {
        1: '#00E599',
      },
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
