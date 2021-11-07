import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'transparent',
    boxShadow: 'none',
  },
  logo: {
    maxWidth: '203px',
    maxHeight: '36px',
    marginLeft: theme.spacing(3),
  },
  navWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dashboard: { backgroundColor: '#FFFFFF' },
  drawerWrapper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: '300px',
    },
  },
  btnWrapper: {
    width: '30vw',
    display: 'flex',
    justifyContent: 'space-around',
  },
  txtBtn: {
    color: 'white',
  },
  link: { textDecoration: 'none' },
  containedBtn: {
    color: 'white',
    background: 'red',
  },
  outlinedBtn: {
    color: 'white',
    border: 'solid 2px rgba(255,255,255,0.2)',
  },
}));

export default useStyles;
