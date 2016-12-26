import React from 'react';
import Title from './Article/Title';
import Content from './Article/Content';

export default class Article extends React.Component {
  static get defaultProps() {
    return {
      title: "Hello, world!",
      content: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!"
    }
  }

  render() {
    return (
        <article>
          <Title>
            {this.props.title}
          </Title>
          <Content>
            {this.props.content}
          </Content>
        </article>
    );
  }
}
