import { Toolbar, Box, Button, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';

function NavBarLinks(): JSX.Element {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root}>
      <CssBaseline />
      <Box className={classes.btnWrapper}>
        <Link to="/signup" className={classes.link}>
          <Typography className={classes.textlink}>BECOME A SITTER</Typography>
        </Link>
        <Link to="/login" className={classes.link}>
          <Button variant="outlined" size="small" color="primary" className={classes.outlinedBtn}>
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
  );
}

export default NavBarLinks;
