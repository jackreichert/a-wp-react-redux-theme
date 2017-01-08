import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import Article from '../components/main/article';
import PageNav from '../components/main/pageNav';

class Main extends Component {
	componentDidUpdate() {
		window.scrollTo(0,0);
	}

	componentWillReceiveProps(nextProps){
		if ( this.props.pageNum !== nextProps.pageNum ) {
			this.props.fetchPosts(nextProps.pageNum);
		}
	}

	componentWillMount() {
		this.props.fetchPosts(this.props.pageNum);
	}

	renderPosts(posts) {
		return posts.map(post => {
			return (<Article key={post.id} title={post.title.rendered} content={post.content.rendered} link={post.link} />);
		});
	}

	render() {
		return (<main>
			<div className="row">
				{this.renderPosts(this.props.posts)}
			</div>
			<PageNav pageNum={this.props.pageNum} />
		</main>);
	}
}

function mapStateToProps({posts}) {
	return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(Main);
