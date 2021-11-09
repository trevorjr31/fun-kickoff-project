import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    background: '#FFFFFF',
    boxShadow: '1px 1px 15px rgb(0,0,0,0.1)',
    marginRight: 50,
  },
  outlinedBtn: {
    color: 'red',
    border: 'solid 1px red',
    width: 25,
    height: 45,
    borderRadius: theme.shape.borderRadius,
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    '&:hover': {
      'background-color': 'rgb(255,0,0,0.5)',
      color: 'rgb(255,255,255)',
    },
  },
  link: { textDecoration: 'none' },
  textlink: {
    color: 'rgb(0,0,0)',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    textTransform: 'uppercase',
    fontFamily: theme.typography.fontFamily,
  },
}));

export default useStyles;
