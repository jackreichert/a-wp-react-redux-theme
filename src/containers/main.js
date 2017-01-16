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
        if (this.isRequestPrettyPermalink(nextProps)) {
            this.props.fetchPost(nextProps.prettyPermalink);
        } else if (this.isSearchRequest(nextProps)) {
            this.props.searchSite(nextProps.searchTerm);
        } else if (this.isRequestForIndex(nextProps)) {
            this.props.fetchPosts(nextProps.pageNum);
        }
    }

    isSingle() {
        return 1 === this.props.posts.length;
    }

    getContentOrExcerpt(post) {
        return this.isSingle() ? post.content.rendered : post.excerpt.rendered;
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
            return <Article key={post.id} title={post.title.rendered} content={this.getContentOrExcerpt(post)}
                            link={post.link} isSingle={this.isSingle()} featuredImage={post.featured_image_url}/>;
        });
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
                <PageNav pageNum={this.props.pageNum} shouldRender={1 < this.props.posts.length}/>
            </div>
        );
    }
}

function mapStateToProps({posts}) {
    return {posts};
}

export default connect(mapStateToProps, {fetchPosts, fetchPost, searchSite})(Main);
