import { Typography, Grid, Box } from '@material-ui/core';
import useStyles from './useStyles';
import EditProfileForm from './editProfileForm/EditProfileForm';

export default function EditProfile(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container justify="center" component="main">
      <Grid item>
        <Box pt={5}>
          <Box display="flex" justifyContent="center">
            <Typography className={classes.title}>edit profile</Typography>
          </Box>
          <EditProfileForm />
        </Box>
      </Grid>
    </Grid>
  );
}
