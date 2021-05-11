import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import classes from './TopBar.module.css';
import ProfileMenu from '../profile/profileMenu.js';
// ------
const clickNot=()=>{
  console.log('Notification Clicked');
};
// ------

/**
 * App bar for the app.
 * @return {string} HTML for the app bar.
 */
export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /* const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };*/

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };


  const menuId = 'primary-search-account-menu';


  return (
    <div className={classes.grow}>
      <AppBar className={classes.AppBar}
        style={{backgroundColor: 'rgb(100, 190, 202)', boxShadow: 'none'}}>
        <Toolbar>

          <Typography className={classes.title} variant="h5" noWrap>
            Home
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="  Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{'aria-label': 'search'}}
            />
          </div>
          <div className={classes.grow}></div>
          <p>|</p>
          <div className={classes.sectionDesktop}>

            <IconButton aria-label="show 17 new notifications"
              color="inherit" onClick={clickNot}>
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>

      <ProfileMenu anchorEl={anchorEl} Menu={Menu} menuId={menuId}
        isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose}
        MenuItem={MenuItem} />
    </div>
  );
}


