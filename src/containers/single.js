import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchPosts, fetchPost, searchSite} from '../actions/index';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

class Single extends Component {
    componentWillMount() {
        this.getPosts(this.props, true);
    }

    componentWillReceiveProps(nextProps) {
        this.getPosts(nextProps);
    }

    getPosts(props, willMount = false) {
        if (props.params.splat !== this.props.params.splat || willMount) {
            this.props.fetchPost(props.params.splat);
        }
    }

    render() {
        return (
            <section className="container-fluid">
                <Header />
                <Main posts={this.props.posts} />
                <Footer />
            </section>
        );
    }
}

function mapStateToProps({posts}) {
    return {posts};
}

export default connect(mapStateToProps, {fetchPosts, fetchPost, searchSite})(Single)