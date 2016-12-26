import React from 'react';

export default class Content extends React.Component {
  render() {
    return (<div dangerouslySetInnerHTML={ { __html: this.props.children } } />);
  }
}
