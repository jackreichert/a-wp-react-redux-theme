import React from 'react';

class Content extends React.Component {
  render() {
    return (<div dangerouslySetInnerHTML={ { __html: this.props.children } } />);
  }
}

module.exports = Content;
