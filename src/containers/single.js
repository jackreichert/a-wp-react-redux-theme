import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchPost} from '../actions/index';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

class Single extends Component {
    componentWillMount() {
        this.props.fetchPost(this.props.location.pathname);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.props.fetchPost(nextProps.location.pathname);
        }
    }

    componentDidUpdate() {
        document.title = `${this.props.posts[0].title.rendered} - ${RT_API.siteName}`;
    }

    render() {
        return (
            <section className="container-fluid">
                <Header/>
                <Main posts={this.props.posts}
                      pageNum={1}
                      route=""
                      slug={this.props.match.params.slug || ''}/>
                <Footer/>
            </section>
        );
    }
}

function mapStateToProps({posts}) {
    return {posts};
}

export default connect(mapStateToProps, {fetchPost})(Single)