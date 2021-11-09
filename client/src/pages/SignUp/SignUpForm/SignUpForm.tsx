import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface Props {
  handleSubmit: (
    {
      username,
      email,
      password,
    }: {
      email: string;
      password: string;
      username: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      email: string;
      password: string;
      username: string;
    }>,
  ) => void;
}

const SignUpForm = ({ handleSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required('Username is required').max(40, 'Username is too long'),
        email: Yup.string().required('Email is required').email('Email is not valid'),
        password: Yup.string()
          .required('Password is required')
          .max(100, 'Password is too long')
          .min(6, 'Password too short'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Typography className={classes.label}>EMAIL ADDRESS</Typography>
          <TextField
            variant="outlined"
            className={classes.inputField}
            placeholder="Your email"
            id="email"
            fullWidth
            margin="normal"
            InputLabelProps={{
              disableAnimation: false,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="email"
            autoComplete="email"
            autoFocus
            helperText={touched.email ? errors.email : ''}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={handleChange}
          />
          <Typography className={classes.label}>NAME</Typography>
          <TextField
            variant="outlined"
            className={classes.inputField}
            placeholder="Your name"
            id="name"
            fullWidth
            margin="normal"
            InputLabelProps={{
              disableAnimation: false,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            name="name"
            autoComplete="name"
            autoFocus
            helperText={touched.username ? errors.username : ''}
            error={touched.username && Boolean(errors.username)}
            value={values.username}
            onChange={handleChange}
          />
          <Typography className={classes.label}>PASSWORD</Typography>
          <TextField
            className={classes.inputField}
            variant="outlined"
            placeholder="Create a password"
            id="password"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              classes: { input: classes.inputs },
            }}
            type="password"
            autoComplete="current-password"
            helperText={touched.password ? errors.password : ''}
            error={touched.password && Boolean(errors.password)}
            value={values.password}
            onChange={handleChange}
          />
          <Box textAlign="center">
            <Button
              type="submit"
              disableElevation={true}
              size="large"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'SIGN UP'}
            </Button>
          </Box>
          <div style={{ height: 95, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography className={classes.label}>
              Already a member?
              <Link className={classes.link} to="/login">
                Login
              </Link>
            </Typography>
          </div>
        </form>
      )}
    </Formik>
  );
};
export default SignUpForm;
