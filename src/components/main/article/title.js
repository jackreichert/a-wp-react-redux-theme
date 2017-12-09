import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Title extends Component {
    extractPath(link) {
        const url = document.createElement('a');
        url.href = link;

        return link.replace(`${url.protocol}//${url.host}`, '');
    }

    getClasses() {
        return this.props.isSingle ? '' : 'card-title';
    }

    render() {
        return (
            <header className={this.getClasses()}>
                <Link to={this.extractPath(this.props.link)}><h1
                    dangerouslySetInnerHTML={ {__html: this.props.children} }/>
                </Link>
            </header>
        );
    }
}