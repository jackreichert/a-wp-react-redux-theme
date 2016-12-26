import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <header>
        <a href=""><h1 dangerouslySetInnerHTML={ { __html: this.props.children } } /></a>
      </header>
    );
  }
}
