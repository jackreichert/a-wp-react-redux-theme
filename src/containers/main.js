import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'react-redux';

import {fetchPosts, fetchPost, searchSite} from '../actions/index';
import Article from '../components/main/article';
import PageNav from '../components/main/pageNav';

class Main extends Component {
    componentWillUpdate() {
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", this.props, nextProps);
        if (this.isRequestPrettyPermalink(nextProps)) {
            console.log('isRequestPrettyPermalink');
            this.props.fetchPost(nextProps.prettyPermalink);
        } else if (this.isSearchRequest(nextProps)) {
            console.log('isSearchRequest');
            this.props.searchSite(nextProps.searchTerm);
        } else if (this.isRequestForIndex(nextProps)) {
            console.log('isRequestForIndex');
            this.props.fetchPosts(nextProps.pageNum);
        }
    }

    isSearchRequest(nextProps) {
        return 'undefined' !== typeof nextProps.searchTerm && this.props.searchTerm !== nextProps.searchTerm && 2 < nextProps.searchTerm.length;
    }

    isRequestPrettyPermalink(nextProps) {
        return this.props.prettyPermalink !== nextProps.prettyPermalink && 'undefined' !== typeof nextProps.prettyPermalink;
    }

    isRequestForIndex(nextProps) {
        return this.props.pageNum !== nextProps.pageNum
            || ('undefined' === typeof nextProps.prettyPermalink && 'undefined' === typeof nextProps.searchTerm)
            && (this.props.prettyPermalink !== nextProps.prettyPermalink || this.props.searchTerm !== nextProps.searchTerm);
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
            <main id="postsContainer" className="row">
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={1}>
                    {this.renderPosts(this.props.posts)}
                </ReactCSSTransitionGroup>
                <PageNav pageNum={this.props.pageNum} shouldRender={1 < this.props.posts.length}/>
            </main>);
    }
}

function mapStateToProps({posts}) {
    return {posts};
}

export default connect(mapStateToProps, {fetchPosts, fetchPost, searchSite})(Main);
