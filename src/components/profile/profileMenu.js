/* eslint-disable*/
import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {makeStyles} from '@material-ui/core/styles';
// import classes from './profileMenu.module.css';
const useStyles = makeStyles(() => ({
  menuPaper: {
    backgroundColor: 'lightblue',
    borderRadius: '10px',
  },
}));
const ProfileMenu = (props)=>{
  const classes = useStyles();
  return (
    <props.Menu
      anchorEl={props.anchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      id={props.menuId}
      keepMounted
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={props.isMenuOpen}
      onClose={props.handleMenuClose}
      classes={{paper: classes.menuPaper}}
    >
      <props.MenuItem onClick={props.handleMenuClose} styles={ {backgroundColor: 'rgb(100, 190, 202)'}}>My Profile</props.MenuItem>
      <props.MenuItem onClick={props.handleMenuClose}>My Calendar</props.MenuItem>
      <props.MenuItem onClick={props.handleMenuClose}>My Inbox</props.MenuItem>
      <hr></hr>
      <props.MenuItem onClick={props.handleMenuClose}><ExitToAppIcon/>Log Out</props.MenuItem>
    </props.Menu>
  );
};

export default ProfileMenu;
