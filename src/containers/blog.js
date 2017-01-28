import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchPosts, fetchPost, searchSite} from '../actions/index';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

class Layout extends Component {
    componentWillMount() {
        this.getPosts(this.props, true);
    }

    componentWillReceiveProps(nextProps) {
        this.getPosts(nextProps);
    }

    getPosts(props, willMount = false) {
        if (props.params.pageNum !== this.props.params.pageNum || willMount || this.props.location.pathname !== props.location.pathname) {
            this.props.fetchPosts(props.params.pageNum || 1);
        }
    }

    render() {
        return (
            <section className="container-fluid">
                <Header />
                <Main posts={this.props.posts} pageNum={this.props.params.pageNum || 1}/>
                <Footer />
            </section>
        );
    }
}

function mapStateToProps({posts}) {
    return {posts};
}

export default connect(mapStateToProps, {fetchPosts, fetchPost, searchSite})(Layout)