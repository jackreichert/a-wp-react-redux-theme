import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class Layout extends React.Component {
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
