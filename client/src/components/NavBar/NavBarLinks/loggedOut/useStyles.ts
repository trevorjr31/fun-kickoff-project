import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  btnWrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    display: 'flex',
    alignItems: 'center',
    maxWidth: 500,
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
  containedBtn: {
    color: 'white',
    background: 'red',
    margin: theme.spacing(1),
    padding: 10,
    width: 125,
    height: 45,
    borderRadius: theme.shape.borderRadius,
    fontSize: 12,
    fontWeight: 700,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      'background-color': 'rgba(255,0,0,0.5)',
    },
  },
  outlinedBtn: {
    color: 'red',
    border: 'solid 1px red',
    margin: theme.spacing(1),
    padding: 10,
    width: 125,
    height: 45,
    borderRadius: theme.shape.borderRadius,
    fontSize: 12,
    fontWeight: 700,
    fontFamily: theme.typography.fontFamily,
    '&:hover': {
      'background-color': 'rgb(255,0,0,0.5)',
      color: 'rgb(255,255,255)',
    },
  },
}));

export default useStyles;
