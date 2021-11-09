import { AppBar, Box, Typography } from '@material-ui/core';
import logo from '../../Images/pawlogo.png';
import LoggedInNavBarLinks from './NavBarLinks/loggedIn/NavBarLinks';
import LoggedOutNavBarLinks from './NavBarLinks/loggedOut/NavBarLinks';
import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useAuth } from '../../context/useAuthContext';

function NavBar(): JSX.Element {
  const classes = useStyles();
  const user = useAuth().loggedInUser;

  return (
    <AppBar color="transparent" position="static" className={classes.root} elevation={0}>
      <CssBaseline />
      <Box className={classes.navWrapper}>
        <Box className={classes.logoWrapper}>
          <img src={logo} alt="logo" className={classes.logo} />
          <Typography className={classes.logoText}>LovingSitter.</Typography>
        </Box>
        {!user ? (
          <div>
            <LoggedOutNavBarLinks />
          </div>
        ) : (
          <LoggedInNavBarLinks user={user} />
        )}
      </Box>
    </AppBar>
  );
}

export default NavBar;
