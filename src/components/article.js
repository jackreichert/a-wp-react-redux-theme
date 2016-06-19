import React from 'react';
import Title from './title';
import Content from './content';

class Article extends React.Component {
  static get defaultProps() {
    return {
      title: "Hello, world!",
      content: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!"
    }
  }
  
  render() {
    console.log(this.props);
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

module.exports = Article;
