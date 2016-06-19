import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <header>
        <h1 dangerouslySetInnerHTML={ { __html: this.props.children } } />
      </header>
    );
  }
}

module.exports = Title;
