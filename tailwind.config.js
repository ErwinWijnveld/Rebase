/** @type {import('tailwindcss').Config} */

const globalStyles = ({ addBase, config }) => {
  addBase({
    p: {
      marginBottom: config('theme.margin.4'),
      lineHeight: config('theme.lineHeight.normal'),
      fontSize: config('theme.fontSize.par'),
    },
    'h1, h2, h3, h4, h5': {
      marginBottom: config('theme.margin.2'),
      lineHeight: config('theme.lineHeight.tight'),
      fontWeight: config('theme.fontWeight.bold'),
    },
    h1: { fontSize: config('theme.fontSize.head1') },
    h2: { fontSize: config('theme.fontSize.head2') },
    'ol, ul': { paddingLeft: config('theme.padding.4') },
    ol: { listStyleType: 'decimal' },
    ul: { listStyleType: 'disc' },
  });
}

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1144px',
        },
      },
      colors: {
        yellow: '#FBD38D',
        dark: '#161A22',
      },
      fontSize: {
        head1: '65px',
        head2: '45px',
        par: '20px',
      },
    },
  },
  plugins: [globalStyles],
}
