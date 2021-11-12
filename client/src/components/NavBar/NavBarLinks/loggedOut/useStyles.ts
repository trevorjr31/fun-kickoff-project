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
    textTransform: 'uppercase',
  },
  containedBtn: {
    margin: theme.spacing(1),
    width: 125,
    height: 45,
    borderRadius: theme.shape.borderRadius,
    fontSize: 12,
    fontWeight: 700,
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
    '&:hover': {
      'background-color': 'rgb(255,0,0,0.5)',
      color: 'rgb(255,255,255)',
    },
  },
}));

export default useStyles;
