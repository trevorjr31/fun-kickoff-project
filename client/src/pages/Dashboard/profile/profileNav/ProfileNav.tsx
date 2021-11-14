import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { Typography } from '@material-ui/core';
import PaymentIcon from '@material-ui/icons/PaymentSharp';
import SecurityIcon from '@material-ui/icons/Security';
import SettingsIcon from '@material-ui/icons/Settings';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

export default function ProfileNav(): JSX.Element {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
  };

  const profileMenuItems = [
    { link: 'edit profile', route: '/profile', icon: <EditIcon className={classes.icon} /> },
    { link: 'profile photo', route: '/profile/profile-photo', icon: <PhotoCameraIcon className={classes.icon} /> },
    { link: 'payment', route: '/profile/payment', icon: <PaymentIcon className={classes.icon} /> },
    { link: 'security', route: '/profile/security', icon: <SecurityIcon className={classes.icon} /> },
    { link: 'settings', route: '/profile/settings', icon: <SettingsIcon className={classes.icon} /> },
  ];

  const profileMenu = (
    <List className={classes.profileMenu}>
      {profileMenuItems.map((item, index) => (
        <ListItem
          button
          component={(props) => <Link {...props} to={item.route} />}
          key={index}
          dense={true}
          classes={{ selected: classes.listItemSelected }}
          className={classes.listItem}
          selected={selectedIndex === index}
          onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleListItemClick(event, index)}
        >
          <Typography className={classes.linkText}> {item.link} </Typography>
          {item.icon}
        </ListItem>
      ))}
    </List>
  );

  return <div>{profileMenu}</div>;
}
