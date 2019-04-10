import React, { Component } from 'react';

// Reactstrap components.
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav
} from 'reactstrap';

// Custom components.
import { NavItemsList } from './sub-components';

// API utils, helpers, and other assets.
import { MAIN_NAV_ITEMS } from '../../utils/constants';

// NOTE: This is directly from the reactstrap docs, with slight modifications.
export default class MainNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = { collapsed: true };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { makeReport } = this.props;
    return (
      <Navbar
        dark
        className="navbar-expand-md align-items-baseline mb-3 py-0 py-md-2 shadow-sm"
      >
        <NavbarBrand href="/" className="mr-auto">
          CLICK NOTES
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2 rounded-circle" />
        <Collapse
          navbar
          isOpen={!this.state.collapsed}
        >
          <Nav navbar className="flex-row flex-wrap justify-content-around ml-auto text-left">
            <NavItemsList navItems={MAIN_NAV_ITEMS} makeReport={makeReport} />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
