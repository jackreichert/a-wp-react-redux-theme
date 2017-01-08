import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header className="row">
        <h1><Link to='/'>Jack's Place</Link></h1>
      </header>
    );
  }
}

module.exports = Header;
