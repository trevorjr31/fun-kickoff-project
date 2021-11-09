import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  inputField: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(0,0,0,0.1)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(0,0,0,0.5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'grey',
      },
    },
    '& ::placeholder': {
      fontFamily: theme.typography.fontFamily,
    },
  },
  label: {
    fontSize: 11,
    fontWeight: 800,
    fontFamily: theme.typography.fontFamily,
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
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 170,
    height: 50,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 14,
    backgroundColor: theme.palette.primary.main,
    fontWeight: 500,
    fontFamily: theme.typography.fontFamily,
    '&:hover': {
      'background-color': 'rgba(255,0,0,0.5)',
    },
  },
  link: {
    color: 'red',
    marginLeft: 3,
  },
}));

export default useStyles;
