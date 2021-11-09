import { AppBar, Box } from '@material-ui/core';
import logo from '../../Images/logo.png';
import LoggedOutNavBarLinks from './NavBarLinks/loggedOut/NavBarLinks';
import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBarMenu from './NavBarLinks/loggedOut/NavBarMenu/NavBarMenu';

function NavBar(): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar color="transparent" position="static" className={classes.root} elevation={0}>
      <CssBaseline />
      <Box className={classes.navWrapper}>
        <img src={logo} alt="logo" className={classes.logo} />
        <LoggedOutNavBarLinks />
        <NavBarMenu />
      </Box>
    </AppBar>
  );
}

export default NavBar;
