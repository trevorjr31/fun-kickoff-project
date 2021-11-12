import React from 'react';
import { Typography, Button, Box, MenuItem, Menu } from '@material-ui/core';
import useStyles from './useStyles';
import { Link } from 'react-router-dom';

export default function NavBarMenu(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Button
        className={classes.outlinedBtn}
        id="nav-menu-open"
        aria-controls="nav-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        ☰
      </Button>
      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'nav-menu-open',
        }}
      >
        <MenuItem component={Link} to="/signup" onClick={handleClose}>
          <Typography className={classes.textlink}>become a sitter</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/signup">
          <Typography className={classes.textlink}>login</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/signup" onClick={handleClose}>
          <Typography className={classes.textlink}>signup</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
