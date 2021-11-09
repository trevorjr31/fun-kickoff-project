import { Toolbar, Box, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import { User } from '../../../../interface/User';
import AuthMenu from '../../../AuthMenu/AuthMenu';

interface Props {
  user: User;
}

function LoggedInNavBarLinks({ user }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <Toolbar>
      <CssBaseline />
      <Box className={classes.btnWrapper}>
        <Typography component={Link} to="/becomeasitter" className={classes.textlink}>
          BECOME A SITTER
        </Typography>
        <Typography component={Link} to="/dashboard" className={classes.navlink}>
          Dashboard
        </Typography>
        <Typography className={classes.navlink}>Notifications</Typography>
        <Typography component={Link} to="/mysitters" className={classes.navlink}>
          My Sitters
        </Typography>
        <Typography component={Link} to="/messages" className={classes.navlink}>
          Messages
        </Typography>
      </Box>
      <AuthMenu user={user} />
    </Toolbar>
  );
}

export default LoggedInNavBarLinks;
