import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Title extends Component {
    render() {
        return (
            <header>
                <Link to={extractPath(this.props.link)}><h1 dangerouslySetInnerHTML={ {__html: this.props.children} }/>
                </Link>
            </header>
        );
    }
}

function extractPath(link) {
    const url = document.createElement('a');
    url.href = link;

    return link.replace(`${url.protocol}//${url.host}`, '');
}
