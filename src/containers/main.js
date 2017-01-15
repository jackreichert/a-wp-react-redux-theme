import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'react-redux';

import {fetchPosts, fetchPost} from '../actions/index';
import Article from '../components/main/article';
import PageNav from '../components/main/pageNav';

class Main extends Component {
    componentWillUpdate() {
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
        if (this.isRequestPrettyPermalink(nextProps)) {
            this.props.fetchPost(nextProps.prettyPermalink);
        } else if (this.isRequestForIndex(nextProps)) {
            this.props.fetchPosts(nextProps.pageNum);
        }
    }

    isRequestPrettyPermalink(nextProps) {
        return this.props.prettyPermalink !== nextProps.prettyPermalink && 'undefined' !== typeof nextProps.prettyPermalink;
    }

    isRequestForIndex(nextProps) {
        return this.props.pageNum !== nextProps.pageNum || 'undefined' !== typeof this.props.prettyPermalink && 'undefined' === typeof nextProps.prettyPermalink;
    }

    componentWillMount() {
        if ('undefined' !== typeof this.props.prettyPermalink) {
            this.props.fetchPost(this.props.prettyPermalink);
        } else {
            this.props.fetchPosts(this.props.pageNum);
        }
    }

    renderPosts(posts) {
        return posts.map(post => {
            return <Article key={post.id} title={post.title.rendered} content={post.content.rendered}
                            link={post.link}/>;
        });
    }

    render() {
        return (
            <main className="row">
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={200}>
                    {this.renderPosts(this.props.posts)}
                </ReactCSSTransitionGroup>
                <PageNav pageNum={this.props.pageNum} shouldRender={1 < this.props.posts.length}/>
            </main>);
    }
}

function mapStateToProps({posts}) {
    return {posts};
}

export default connect(mapStateToProps, {fetchPosts, fetchPost})(Main);
