import React, {Component} from 'react';

import Menu from '../containers/parts/menu';

export default class Footer extends Component {
    getYear() {
        var date = new Date();
        return date.getFullYear();
    }

    render() {
        return (
            <footer>
                <Menu name="footer_menu"/>
                <div className="clearfix copy">&copy; {this.getYear()} {RT_API.siteName} | Powered by: <a href="https://github.com/jackreichert/a-wp-react-redux-theme">A React+Redux WordPress theme</a></div>
            </footer>
        );
    }
}
