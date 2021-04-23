import { createMuiTheme } from '@material-ui/core/styles';

// https://coolors.co/9246ff

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#201c2b',
      dark: '#201c2b',
      paper: '#201c2b',
      alt: '#222127',
      'alt-2': '#2F2F37',
      accent: '#782CE8',
      'accent-alt': '#5C19C6',
      'accent-alt-2': '#451094',
    },
    primary: {
      main: '#9246FF',
    },

    purple: {
      light: '#e2dbf0',
      main: '#6441a4',
      dark: '#201c2b',
    },

    gray: {
      light: '#e5e3e8',
      main: '#424242',
      dark: '#232127',
    },

    fill: {
      brand: '#9246ff',
      info: '#1e69ff',
      warn: '#fdca61',
      alert: '#e81b16',
      success: '#3ce3c9',
    },
  },
});

export default theme;
