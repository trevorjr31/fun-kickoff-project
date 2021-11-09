import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  btnWrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    display: 'flex',
    alignItems: 'center',
    maxWidth: 600,
  },
  textlink: {
    textDecoration: 'underline',
    color: 'rgb(0,0,0)',
    alignSelf: 'center',
    fontWeight: theme.typography.button.fontWeight,
    fontSize: 12,
    fontFamily: theme.typography.fontFamily,
    paddingRight: 40,
  },
  navlink: {
    textDecoration: 'none',
    color: 'rgb(0,0,0)',
    alignSelf: 'center',
    fontWeight: theme.typography.button.fontWeight,
    fontSize: 12,
    fontFamily: theme.typography.fontFamily,
    paddingRight: 40,
  },
}));

export default useStyles;
