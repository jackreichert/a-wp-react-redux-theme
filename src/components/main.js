import $ from 'jquery';
import React from 'react';
import Article from './article';

class Main extends React.Component {
  constructor() {
    super();
    this.postsURI = 'wp/v2/posts';
    this.state = {
      posts : []
    };
  }

  componentWillMount() {
    this.serverRequest = $.get(RT_API.root + this.postsURI, function (results) {
      this.setState({
        posts : results
      });
    }.bind(this));
  }

  render() {
    return (<div>
      {this.state.posts.map((post) =>
        <Article key={post.id} title={post.title.rendered} content={post.content.rendered} />
      )}
    </div>);
  }
}

module.exports = Main;
