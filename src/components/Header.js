import React, {Component} from 'react';
import {Link} from 'react-router';

import Menu from '../containers/menu';

class Header extends Component {
    render() {
        return (
            <header>
                <h1><Link to='/'>{RT_API.siteName}</Link></h1>
                <Menu name="main_menu"/>
            </header>
        );
    }
}

module.exports = Header;
