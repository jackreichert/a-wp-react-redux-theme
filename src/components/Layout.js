import React, {Component} from 'react';

import Header from './header';
import Main from '../containers/main';
import Footer from './footer';

export default class Layout extends Component {
    render() {
        return (
            <section className="container-fluid">
                <Header searchTerm={this.props.params.term}/>
                <Main routePath={this.props.route.path} pageNum={this.props.params.pageNum || 1} prettyPermalink={this.props.params.splat} searchTerm={this.props.params.term}/>
                <Footer />
            </section>
        );
    }
}
