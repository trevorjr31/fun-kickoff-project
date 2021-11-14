import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import useStyles from './useStyles';
import { TextField } from '@material-ui/core';

export default function EditProfile(): JSX.Element {
  const classes = useStyles();
  return (
    <Grid container justify="center" component="main">
      <Grid item>
        <Box pt={7}>
          <Typography className={classes.title}>edit profile</Typography>
          <form>
            <Box display="flex" justifyContent="space-around" minWidth={350}>
              <Typography className={classes.label}>First Name</Typography>{' '}
              <TextField
                className={classes.field}
                variant="outlined"
                placeholder="Your email"
                id="email"
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
                helperText={'g'}
                value={'values.email'}
              />
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
