import { AppBar, Box } from '@material-ui/core';
import logo from '../../Images/logo.png';
import NavBarLinks from './NavBarLinks/NavBarLinks';
import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBarMenu from './NavBarMenu/NavBarMenu';

function NavBar(): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar color="transparent" position="static" className={classes.root} elevation={0}>
      <CssBaseline />
      <Box className={classes.navWrapper}>
        <img src={logo} alt="logo" className={classes.logo} />
        <NavBarLinks />
        <NavBarMenu />
      </Box>
    </AppBar>
  );
}

export default NavBar;
