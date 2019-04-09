import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { children } = this.props;

    return (
      <header className="mb-lg-3 bg-primary shadow app-header">
        {children}
      </header>
    );
  }
}
