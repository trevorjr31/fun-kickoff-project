import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../../themes/theme';

const useStyles = makeStyles(() => ({
  contentContainer: {
    minHeight: '50vh',
    minWidth: '50vw',
    backgroundColor: 'white',
    boxShadow: '1px 1px 15px rgb(0,0,0,0.1)',
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('sm')]: {
      width: '95vw',
    },
  },
  viewContainer: {
    minHeight: '80vh',
    width: '80vw',
    display: 'flex',
    justifyContent: 'center',
    alignitems: 'center',
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
      marginTop: theme.spacing(4),
    },
  },
  navContainer: {
    height: '20vh',
    width: '85vw',
    backgroundColor: 'red',
    marginLeft: '17vw',
  },
}));

export default useStyles;
