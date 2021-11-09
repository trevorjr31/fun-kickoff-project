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
    marginLeft: 40,
    marginRight: theme.spacing(1),
  },
  dot: {
    '& .MuiBadge-badge': {
      backgroundColor: '#66bb6a',
    },
  },
}));

export default useStyles;
