import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 20,
  },
  smallScreenItem: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  becomeASitterLink: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    textTransform: 'uppercase',
  },
}));

export default useStyles;
