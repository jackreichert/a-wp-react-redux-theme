import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchPost} from '../actions/index';

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
                <Main posts={this.props.posts}
                      pageNum={this.props.params.pageNum || 1}
                      route={this.props.route.path}
                      slug={this.props.params.slug || ''} />
                <Footer />
            </section>
        );
    }
}

function mapStateToProps({posts}) {
    return {posts};
}

export default connect(mapStateToProps, {fetchPost})(Single)