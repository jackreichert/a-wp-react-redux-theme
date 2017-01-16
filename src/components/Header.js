import React, {Component} from 'react';
import {Link} from 'react-router';

import Menu from '../containers/menu';
import Search from '../containers/search';

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-toggleable-sm navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h1 className="navbar-brand"><Link to='/'>{RT_API.siteName}</Link></h1>
                <nav className="collapse navbar-collapse">
                    <Menu name="main_menu"/>
                    <Search />
                </nav>
            </header>
        );
    }
}

module.exports = Header;
