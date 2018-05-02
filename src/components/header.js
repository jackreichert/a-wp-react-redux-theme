import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Menu from '../containers/parts/menu';
import Search from './search';

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand"><Link to='/'>{RT_API.siteName}</Link></h1>
                <nav className="collapse navbar-collapse">
                    <Menu name="main_menu" />
                    <Search searchTerm={this.props.searchTerm} isSearch={this.props.isSearch} />
                </nav>
            </header>
        );
    }
}

module.exports = Header;
