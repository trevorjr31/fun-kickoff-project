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
    fontWeight: theme.typography.button.fontWeight,
    fontSize: 12,
    paddingRight: 40,
  },
  containedBtn: {
    margin: theme.spacing(1),
    width: 125,
    height: 45,
    textTransform: 'uppercase',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      'background-color': 'rgba(255,0,0,0.5)',
    },
  },
  outlinedBtn: {
    border: 'solid 1px',
    margin: theme.spacing(1),
    width: 125,
    height: 45,
    textTransform: 'uppercase',
    fontFamily: theme.typography.fontFamily,
    '&:hover': {
      'background-color': 'rgb(255,0,0,0.5)',
      color: 'rgb(255,255,255)',
    },
  },
}));

export default useStyles;
