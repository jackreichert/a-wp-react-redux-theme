import React, {Component} from 'react';
import {connect} from 'react-redux';

import {searchSite} from '../actions/index';

import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

class Search extends Component {
    componentWillMount() {
        this.getPosts(this.props, true);
    }

    componentWillReceiveProps(nextProps) {
        this.getPosts(nextProps);
    }

    getPosts(props, willMount = false) {
        if (props.params.term !== this.props.params.term || willMount) {
            this.props.searchSite(props.params.term);
        }
    }

    componentDidUpdate(){
        document.title = `Search Results - ${RT_API.siteName}`;
    }

    render() {
        return (
            <section className="container-fluid">
                <Header searchTerm={this.props.params.term} isSearch={true} />
                <Main posts={this.props.posts}
                      pageNum={this.props.params.pageNum || 1}
                      route={this.props.route.path}
                      slug={this.props.params.term || ''} />
                <Footer />
            </section>
        );
    }
}

function mapStateToProps({posts}) {
    return {posts};
}

export default connect(mapStateToProps, {searchSite})(Search)