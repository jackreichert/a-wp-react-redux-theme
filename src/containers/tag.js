import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchPostsFromTax, getTaxIdFromSlug} from '../actions/index';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

class Category extends Component {
    componentWillMount() {
        this.props.getTaxIdFromSlug('tags', this.props.match.params.slug);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.slug !== nextProps.match.params.slug) {
            this.props.getTaxIdFromSlug('tags', nextProps.match.params.slug);
        }

        if (JSON.stringify(this.props.tax) !== JSON.stringify(nextProps.tax)) {
            this.props.fetchPostsFromTax('tags', nextProps.tax[0].id, nextProps.params.pageNum);
        }
    }

    componentDidUpdate() {
        if (this.props.tax.length) {
            document.title = `${this.props.tax[0].name} - ${RT_API.siteName}`;
        }
    }

    render() {
        return (
            <section className="container-fluid">
                <Header/>
                <Main/>
                <Footer/>
            </section>
        );
    }
}

function mapStateToProps({tax}) {
    return {tax};
}

export default connect(mapStateToProps, {fetchPostsFromTax, getTaxIdFromSlug})(Category)