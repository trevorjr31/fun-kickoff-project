import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../../../themes/theme';

const useStyles = makeStyles(() => ({
  profileMenu: {
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      marginLeft: 0,
    },
  },
  profileLink: {
    fontSize: 12,

    textDecoration: 'none',
    color: '#000000',
    fontWeight: 600,
    paddingTop: '0 !important',
  },
  listItem: {
    opacity: '0.3',
  },
  listItemSelected: {
    backgroundColor: '#fafafa !important',
    opacity: '1',
  },
  icon: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  linkText: {
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default useStyles;
