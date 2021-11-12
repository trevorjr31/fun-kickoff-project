import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  btnWrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    display: 'flex',
  },
  navlink: {
    textDecoration: 'none',
    color: 'rgb(0,0,0)',
    fontWeight: theme.typography.button.fontWeight,
    fontSize: 12,
    marginLeft: 40,
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
