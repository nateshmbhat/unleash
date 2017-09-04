import React, { Component } from 'react';
import { routerShape } from 'react-router/lib/PropTypes';
import { AppBar, Logo, Tab, AvatarButton, Tabs, Menu as UnleashStylesMenu, MenuItem } from 'unleash-styles';


class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPath: window.location.pathname,
    };
  }

  handleMenuClick(path) {
    this.setState({
      currentPath: path,
    });
    this.props.router.push(path);
  }

  isCurrent(path) {
    return this.state.currentPath === path;
  }

  render() {
    const { userId } = this.props;

    return (
      <AppBar appBarLogo={<Logo />}>
        <Tabs>
          <Tab label="home" isCurrent={this.isCurrent('/')} onClick={() => this.handleMenuClick('/')} />
          <Tab
            label="my path"
            isCurrent={this.isCurrent(`/profiles/${userId}`)}
            onClick={() => this.handleMenuClick(`/profiles/${userId}`)}
          />
          <Tab
            label="profiles"
            isCurrent={this.isCurrent('/profiles')}
            onClick={() => this.handleMenuClick('/profiles')}
          />
          <Tab label="goals" isCurrent={this.isCurrent('/goals')} onClick={() => this.handleMenuClick('/goals')} />
          <Tab label="skills" isCurrent={this.isCurrent('/skills')} onClick={() => this.handleMenuClick('/skills')} />
        </Tabs>
        <UnleashStylesMenu menuButton={<AvatarButton type="small" label="NO" />}>
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
  userId: React.PropTypes.string.isRequired,
  router: routerShape.isRequired,
};

export default Menu;
