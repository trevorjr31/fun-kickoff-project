import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../themes/theme';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40,
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 25,
    boxShadow: '1px 1px 20px rgb(0,0,0,0.1)',
  },
  welcome: {
    fontSize: 32,
    color: '#000000',
    fontWeight: theme.typography.button.fontWeight,
  },
}));

export default useStyles;
