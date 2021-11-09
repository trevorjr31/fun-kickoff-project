import { Toolbar, Box, Button, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import NavBarMenu from './NavBarMenu/NavBarMenu';

function LoggedOutNavBarLinks(): JSX.Element {
  const classes = useStyles();

  return (
    <Toolbar>
      <CssBaseline />
      <Box className={classes.btnWrapper}>
        <Typography component={Link} to="/signup" className={classes.textlink}>
          BECOME A SITTER
        </Typography>
        <Button component={Link} to="/login" variant="outlined" color="primary" className={classes.outlinedBtn}>
          LOGIN
        </Button>
        <Button component={Link} to="/signup" variant="contained" color="primary" className={classes.containedBtn}>
          SIGN UP
        </Button>
      </Box>
      <NavBarMenu />
    </Toolbar>
  );
}

export default LoggedOutNavBarLinks;
