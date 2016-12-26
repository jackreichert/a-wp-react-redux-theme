import React from 'react';

export default class Footer extends React.Component {
  getYear() {
    var date = new Date();
    return date.getFullYear();
  }
  render() {
    return (
      <footer>
        &copy; {this.getYear()} Jack Reichert
      </footer>
    );
  }
}
