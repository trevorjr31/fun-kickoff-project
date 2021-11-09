import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  smallScreenItem: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default useStyles;
