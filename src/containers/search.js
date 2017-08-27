import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

import {searchSite, ROUTER} from '../actions/index';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

class Search extends Component {
    componentWillMount() {
        this.props.searchSite(this.props.match.params.term);
        this.props.dispatch({
            type: ROUTER,
            payload: this.props.match
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.term !== nextProps.match.params.term) {
            this.props.searchSite(nextProps.match.params.term);
            this.props.dispatch({
                type: ROUTER,
                payload: this.props.match
            });
        }
    }

    componentDidUpdate() {
        document.title = `Search Results - ${RT_API.siteName}`;
    }

    render() {
        return (
            <section className="container-fluid template-search">
                <Header searchTerm={this.props.match.params.term} isSearch={true}/>
                <Main/>
                <Footer/>
            </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({searchSite, dispatch}), dispatch)
}

export default connect(null, mapDispatchToProps)(Search)