import { AppBar, Box, Typography } from '@material-ui/core';
import logo from '../../Images/pawlogo.png';
import LoggedInNavBarLinks from './NavBarLinks/loggedIn/NavBarLinks';
import LoggedOutNavBarLinks from './NavBarLinks/loggedOut/NavBarLinks';
import useStyles from './useStyles';

function NavBar(): JSX.Element {
  const classes = useStyles();
  const user = useAuth().loggedInUser;

  return (
    <AppBar color="transparent" position="static" className={classes.root} elevation={0}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex">
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
