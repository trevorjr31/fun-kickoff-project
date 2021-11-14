import { Box } from '@material-ui/core';
import ProfileNav from './profileNav/ProfileNav';
import EditProfile from './editProfile/EditProfile';
import Payment from './payment/Payment';
import { useLocation } from 'react-router-dom';
import useStyles from './useStyles';
import Settings from './settings/Settings';
import Security from './security/Security';
import ProfilePhoto from './profilePhoto/ProfilePhoto';

export default function Profile(): JSX.Element {
  const location = useLocation();
  const classes = useStyles();
  const content = () => {
    switch (location.pathname) {
      case '/profile':
        return <EditProfile />;
      case '/profile/payment':
        return <Payment />;
      case '/profile/settings':
        return <Settings />;
      case '/profile/security':
        return <Security />;
      case '/profile/profile-photo':
        return <ProfilePhoto />;
      default:
        break;
    }
  };
  return (
    <Box display="flex">
      <ProfileNav />
      <Box display="flex" className={classes.viewContainer}>
        <Box display="flex" className={classes.contentContainer}>
          {content()}
        </Box>
      </Box>
    </Box>
  );
}
