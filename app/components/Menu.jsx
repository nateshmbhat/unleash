import React, { Component } from 'react';
import { AppBar, Logo, Avatar, MenuItem, Tabs, Tab, Menu as UnleashStylesMenu } from 'unleash-styles';
import { routerShape } from 'react-router/lib/PropTypes';

class Menu extends Component {
  handleMenuClick() {
    console.log('this ...');
  }

  render() {
    return (
      <AppBar appBarLogo={<Logo />}>
        <Tabs>
          <Tab label="home" />
          <Tab label="my path" />
          <Tab label="profile" />
          <Tab label="goals" />
          <Tab label="skills" />
        </Tabs>
        <UnleashStylesMenu menuButton={<Avatar type="small" label="NO" />}>
          <MenuItem label="nikita" type="important" />
          <MenuItem label="nikita.ormonov@eleken.co" type="email" />
          <MenuItem label="edit profile" type="link" />
          <MenuItem label="sign out" type="link" />
        </UnleashStylesMenu>
      </AppBar>
    );
  }
}

Menu.propTypes = {
  router: routerShape.isRequired,
};

export default Menu;
