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
            return <Link key={item.ID} className="nav-link" to={Menu.getRelativeUrl(item.url)}>{item.title}</Link>;
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
            <nav className="nav">
                {this.renderMenu(this.props.menu)}
            </nav>
        );
    }
}

function mapStateToProps({menu}) {
    return {menu};
}

export default connect(mapStateToProps, {fetchMenu})(Menu);