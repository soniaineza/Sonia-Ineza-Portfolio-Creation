export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF8F4',
        card: '#F4F1EA',
        ink: '#16140F',
        mute: '#6A655B',
        line: '#E6E1D7',
        clay: '#9A3B1B',
        moss: '#55613F',
        sand: '#C9A26B',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { page: '72rem' },
    },
  },
  plugins: [],
}
