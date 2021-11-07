import { AppBar, Toolbar, Box, Button } from '@material-ui/core';
import logo from '../../Images/logo.png';
import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';

function NavBar(): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar color="transparent" position="relative" elevation={0}>
      <CssBaseline />
      <Box className={classes.navWrapper}>
        <img src={logo} alt="logo" className={classes.logo} />
        <Toolbar>
          <Box className={classes.btnWrapper}>
            <Link to="/signup" className={classes.link}>
              <Button variant="text" color="primary" className={classes.txtBtn}>
                BECOME A SITTER
              </Button>
            </Link>
            <Link to="/login" className={classes.link}>
              <Button variant="outlined" color="primary" className={classes.outlinedBtn}>
                LOGIN
              </Button>
            </Link>
            <Link to="/signup" className={classes.link}>
              <Button href="/signup" variant="contained" color="primary" className={classes.containedBtn}>
                SIGN UP
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default NavBar;
