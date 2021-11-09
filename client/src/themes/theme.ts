import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto", "sans-serif"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 900,
    },
  },
  palette: {
    primary: { main: '#FF0000' },
  },
  shape: {
    borderRadius: 5,
  },
});
