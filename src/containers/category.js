import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchPostsFromCat} from '../actions/index';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

class Category extends Component {
    componentWillMount() {
        this.getPosts(this.props, true);
    }

    componentWillReceiveProps(nextProps) {
        this.getPosts(nextProps);
    }

    getPosts(props, willMount = false) {
        if (props.params.slug !== this.props.params.slug || willMount) {
            this.props.fetchPostsFromCat(props.params.slug);
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

export default connect(mapStateToProps, {fetchPostsFromCat})(Category)