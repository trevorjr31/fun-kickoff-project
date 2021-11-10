import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Poppins", "sans-serif", "Roboto"',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  palette: {
    primary: { main: '#F04040' },
    secondary: { main: '#1ec311' },
  },
  shape: {
    borderRadius: 5,
  },

  overrides: {
    MuiOutlinedInput: {
      root: {
        '& $notchedOutline': {
          borderColor: 'rgba(0,0,0,0.1)',
        },
        '&:hover $notchedOutline': {
          borderColor: 'rgba(0,0,0,0.5)',
        },
        '&$focused $notchedOutline': {
          borderColor: 'grey',
        },
      },
    },
    MuiButton: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(255,0,0,0.5) !important',
        },
      },
    },
  },
});
