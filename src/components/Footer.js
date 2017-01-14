import React, {Component} from 'react';
import Menu from '../containers/menu';

export default class Footer extends Component {
    getYear() {
        var date = new Date();
        return date.getFullYear();
    }

    render() {
        return (
            <footer>
                <Menu name="footer_menu"/>
                &copy; {this.getYear()} Jack Reichert
            </footer>
        );
    }
}
