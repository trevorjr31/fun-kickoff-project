import { AppBar, Box, Typography } from '@material-ui/core';
import logo from '../../Images/pawlogo.png';
import useStyles from './useStyles';
import { Link } from 'react-router-dom';
import NavBarLinks from './NavBarLinks/NavBarLinksWrapper/NavBarLinksWrapper';

function NavBar(): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar color="transparent" position="static" className={classes.root} elevation={0}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Link to="/dashboard" className={classes.link}>
          <Box display="flex">
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography className={classes.logoText}>LovingSitter.</Typography>
          </Box>
        </Link>
        <NavBarLinks />
      </Box>
    </AppBar>
  );
}

export default NavBar;
