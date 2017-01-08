import React, { Component } from 'react';

import Header from './header';
import Main from '../containers/main';
import Footer from './footer';

export default class Layout extends Component {
  render() {
    return (
      <section>
        <Header />
        <Main pageNum={this.props.params.pageNum || 1} />
        <Footer />
      </section>
    );
  }
}
