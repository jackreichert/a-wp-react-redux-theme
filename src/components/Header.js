import React, {Component} from 'react';
import {Link} from 'react-router';

import Menu from '../containers/menu';
import Search from '../containers/search';

class Header extends Component {
    render() {
        return (
            <header className="row">
                <div className="row">
                    <h1 className="col-sm-8"><Link to='/'>{RT_API.siteName}</Link></h1>
                    <div className="col-sm-4">
                        <Search />
                    </div>
                </div>
                <Menu name="main_menu"/>
            </header>
        );
    }
}

module.exports = Header;
