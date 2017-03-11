import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchPostsFromTax, getTaxIdFromSlug} from '../actions/index';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

class Category extends Component {
    componentWillMount() {
        console.log("SLUG",this.props.params.slug);
        this.props.getTaxIdFromSlug('categories', this.props.params.slug);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.params.slug !== nextProps.params.slug) {
            this.props.getTaxIdFromSlug('categories', nextProps.params.slug);
        }

        if (JSON.stringify(this.props.tax) !== JSON.stringify(nextProps.tax) || nextProps.params.pageNum !== this.props.params.pageNum) {
            this.props.fetchPostsFromTax('categories', nextProps.tax[0].id, nextProps.params.pageNum);
        }
    }

    componentDidUpdate(){
        document.title = `${this.props.tax[0].name} - ${RT_API.siteName}`;
    }

    render() {
        return (
            <section className="container-fluid">
                <Header />
                <Main posts={this.props.posts}
                      pageNum={this.props.params.pageNum || 1}
                      route={this.props.route.path}
                      slug={this.props.params.slug || ''}/>
                <Footer />
            </section>
        );
    }
}

function mapStateToProps({posts, tax}) {
    return {posts, tax};
}

export default connect(mapStateToProps, {fetchPostsFromTax, getTaxIdFromSlug})(Category)