import { Toolbar, Box, Typography, Badge } from '@material-ui/core';
import useStyles from './useStyles';
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
      <Box className={classes.btnWrapper}>
        <Typography className={classes.navlink}>Notifications</Typography>
        <Typography component={Link} to="/my-sitters" className={classes.navlink}>
          My Jobs
        </Typography>
        <Badge variant="dot" color="secondary">
          <Typography component={Link} to="/messages" className={classes.navlink}>
            Messages
          </Typography>
        </Badge>
      </Box>
      <AuthMenu user={user} />
    </Toolbar>
  );
}

export default LoggedInNavBarLinks;
