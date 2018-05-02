import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Article from './main/article';
import Empty from './main/empty';
import PageNav from '../containers/parts/page-nav';

class Main extends Component {
	componentWillUpdate() {
		window.scrollTo(0, 0);
	}

	isSingle() {
		return 1 === this.props.posts.length;
	}

	renderPosts(posts) {
		if (posts.length) {
			return posts.map(post => {
				return (<Article key={post.id}
				                 post={post}
				                 isSingle={this.isSingle()}/>);
			});
		} else {
			const counter = [...Array(20)];
			return counter.map((val, i) => {
				return (<Empty key={i}/>);
			});
		}
	}

	getClasses() {
		return this.isSingle() ? '' : 'card-columns';
	}

	render() {
		return (
			<div>
				<main id="postsContainer" className={this.getClasses()}>
					<ReactCSSTransitionGroup
						transitionName="fade"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={1}>
						{this.renderPosts(this.props.posts)}
					</ReactCSSTransitionGroup>
				</main>
				<PageNav shouldRender={10 === this.props.posts.length}/>
			</div>
		);
	}
}


function mapStateToProps({posts}) {
	return {posts};
}

export default connect(mapStateToProps)(Main)
