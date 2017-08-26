import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchPostsFromTax, getTaxIdFromSlug, ROUTER} from '../actions/index';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

class Category extends Component {
    componentWillMount() {
        this.props.getTaxIdFromSlug('categories', this.props.match.params.slug);
        this.props.dispatch({
            type: ROUTER,
            payload: this.props.match
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.slug !== nextProps.match.params.slug) {
            this.props.getTaxIdFromSlug('categories', nextProps.match.params.slug);
        }

        if (JSON.stringify(this.props.tax) !== JSON.stringify(nextProps.tax) || nextProps.match.params.pageNum !== this.props.match.params.pageNum) {
            this.props.fetchPostsFromTax('categories', nextProps.tax[0].id, nextProps.match.params.pageNum);
        }

        this.props.dispatch({
            type: ROUTER,
            payload: nextProps.match
        });
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({fetchPostsFromTax, getTaxIdFromSlug, dispatch}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)