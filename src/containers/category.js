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

        if (JSON.stringify(this.props.cat) !== JSON.stringify(nextProps.cat) || nextProps.match.params.pageNum !== this.props.match.params.pageNum) {
            this.props.fetchPostsFromTax('categories', nextProps.cat[0].id, nextProps.match.params.pageNum);
        }

        this.props.dispatch({
            type: ROUTER,
            payload: nextProps.match
        });
    }

    componentDidUpdate() {
        let title = `${RT_API.siteName} - ${RT_API.siteDescription}`;
        if (this.props.cat.length) {
            document.title = title;
        }
        document.title = title;
    }

    render() {
        return (
            <section className="container-fluid template-category">
                <Header/>
                <Main/>
                <Footer/>
            </section>
        );
    }
}

function mapStateToProps({cat}) {
    return {cat};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({fetchPostsFromTax, getTaxIdFromSlug, dispatch}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)