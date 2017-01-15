import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchMenu} from '../actions';

class Menu extends Component {
    componentWillMount() {
        this.props.fetchMenu(this.props.name);
    }

    shouldComponentUpdate(nextProps) {
        return (this.props.name === nextProps.menu.name || "" === nextProps.menu.name);
    }

    renderMenu(menu) {
        return menu.items.map(item => {
            return (
                <li key={item.ID}>
                    <Link className="nav-link" to={Menu.getRelativeUrl(item.url)}>{item.title}</Link>
                </li>
            );
        });
    }

    static getRelativeUrl(url) {
        if (url === window.location.origin) {
            return '/';
        }

        return url.substr(window.location.origin.length);
    }

    render() {
        return (
            <nav>
                <ul className="nav navbar-nav">
                    {this.renderMenu(this.props.menu)}
                </ul>
            </nav>
        );
    }
}

function mapStateToProps({menu}) {
    return {menu};
}

export default connect(mapStateToProps, {fetchMenu})(Menu);