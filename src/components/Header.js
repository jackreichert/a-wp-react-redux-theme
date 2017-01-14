import React, {Component} from 'react';
import {Link} from 'react-router';

import Menu from '../containers/menu';

class Header extends Component {
    render() {
        return (
            <header className="row">
                <h1><Link to='/'>Jack's Place</Link></h1>
                <Menu name="main_menu"/>
            </header>
        );
    }
}

module.exports = Header;
