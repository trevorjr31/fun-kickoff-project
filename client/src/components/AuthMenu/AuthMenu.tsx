import { useState, MouseEvent } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useAuth } from '../../context/useAuthContext';
import { User } from '../../interface/User';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  user: User;
}

const AuthMenu = ({ user }: Props): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logout } = useAuth();
  const classes = useStyles();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  return (
    <div className={classes.root}>
      <IconButton aria-label="show auth menu" aria-controls="auth-menu" aria-haspopup="true" onClick={handleClick}>
        <AvatarDisplay loggedIn user={user} />
      </IconButton>
      <Menu
        id="auth-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem component={Link} onClick={handleClose} className={classes.smallScreenItem} to="/my-sitters">
          My Jobs
        </MenuItem>
        <MenuItem component={Link} onClick={handleClose} className={classes.smallScreenItem} to="/messages">
          Messages
        </MenuItem>
        <MenuItem component={Link} onClick={handleClose} to="/profile">
          Profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default AuthMenu;
