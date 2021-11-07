import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    marginTop: -65,
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: 80,
    maxHeight: '100vh',
  },
  welcome: {
    fontSize: '2rem',
    color: '#000000',
    fontWeight: 700,
    fontFamily: 'Gill Sans, sans-serif',
  },
  splash: {
    height: '100vh',
    minHeight: '600px',
    width: '50vw',
  },
  splashWrapper: {
    height: '100vh',
  },
}));

export default useStyles;
