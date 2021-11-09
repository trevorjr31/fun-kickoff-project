import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FFFFFF',
    boxShadow: '1px 1px 15px rgb(0,0,0,0.1)',
  },
  logo: {
    maxWidth: '203px',
    maxHeight: '36px',
    marginLeft: theme.spacing(3),
    margin: 29,
  },
  navWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
