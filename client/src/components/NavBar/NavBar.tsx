import { AppBar, Box, Typography } from '@material-ui/core';
import logo from '../../Images/pawlogo.png';
import useStyles from './useStyles';
import { Link } from 'react-router-dom';
import NavBarLinksWrapper from './NavBarLinks/NavBarLinksWrapper/NavBarLinksWrapper';

function NavBar(): JSX.Element {
  const classes = useStyles();
  const user = useAuth().loggedInUser;

  return (
    <AppBar color="transparent" position="static" className={classes.root} elevation={0}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>
          <Box display="flex">
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography className={classes.logoText}>LovingSitter.</Typography>
          </Box>
        </Link>
        <NavBarLinksWrapper />
      </Box>
    </AppBar>
  );
}

export default NavBar;
