import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 11,
    fontWeight: theme.typography.button.fontWeight,
    paddingLeft: '5px',
    margin: theme.spacing(2, 5, -2, 0),
    textTransform: 'uppercase',
  },
  inputs: {
    marginLeft: theme.spacing(1),
    height: '2rem',
    padding: '5px',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(5, 1, 1),
    width: 170,
    height: 50,
    fontSize: 14,
    fontWeight: 500,
  },
  link: {
    color: 'red',
    marginLeft: 3,
  },
}));

export default useStyles;
