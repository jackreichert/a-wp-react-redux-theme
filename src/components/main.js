import $ from 'jquery';
import React from 'react';
import Article from './Main/Article';
import PageNav from './Main/PageNav';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.postsURI = 'wp/v2/posts';
		this.pagesURI = 'wp/v2/pages';
		this.state = {
			posts: []
		};
	}

	componentWillMount() {
		this.getPosts(this.props.pageNum);
	}

	componentWillReceiveProps(nextProps) {
		this.getPosts(nextProps.pageNum);
	}

	getPosts(pageNum) {
		var params = `&page=${pageNum}`;
		this.serverRequest = $.get(`${RT_API.root}${this.postsURI}?_embed${params}`, function (results) {
			this.setState({
				posts: results
			});
		}.bind(this));
	}

	render() {
		return (<main>
			<div className="row">
				{this.state.posts.map((post) =>
					<Article key={post.id} title={post.title.rendered} content={post.content.rendered} />
				)}
			</div>
			<PageNav pageNum={this.props.pageNum} />
		</main>);
	}
}
