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
        document.title = `${RT_API.siteName} - ${RT_API.siteDescription}`;;
    }

    render() {
        return (
            <section className="container-fluid template-single">
                <Header/>
                <Main />
                <Footer/>
            </section>
        );
    }
}


function mapStateToProps({posts}) {
    return {posts};
}

export default connect(mapStateToProps, {fetchPost})(Single)