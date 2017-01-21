import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'react-redux';

import {fetchPosts, fetchPost, searchSite} from '../actions/index';
import Article from '../components/main/article';
import PageNav from '../components/main/pageNav';

class Main extends Component {

    componentWillMount() {
        this.getPosts(this.props, true);
    }

    componentWillReceiveProps(nextProps) {
        this.getPosts(nextProps);
    }

    getPosts(props, willMount = false) {
        switch (props.routePath) {
            case 'search/:term':
                if (props.searchTerm !== this.props.searchTerm || willMount) {
                    this.props.searchSite(props.searchTerm);
                }
                break;
            case '*':
                if (props.prettyPermalink !== this.props.prettyPermalink || willMount) {
                    this.props.fetchPost(props.prettyPermalink);
                }
                break;
            case 'page/:pageNum':
            default:
                if (props.pageNum !== this.props.pageNum || willMount || props.routePath !== this.props.routePath) {
                    this.props.fetchPosts(props.pageNum);
                }
                break;
        }
    }

    componentWillUpdate() {
        window.scrollTo(0, 0);
    }

    isSingle() {
        return 1 === this.props.posts.length;
    }

    getContentOrExcerpt(post) {
        return this.isSingle() ? post.content.rendered : post.excerpt.rendered;
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
