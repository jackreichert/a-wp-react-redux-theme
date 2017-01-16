import React, {Component} from 'react';
import {Link} from 'react-router';

export default class PageNav extends Component {

    getPrevPage() {
        if (parseInt(this.props.pageNum) > 2) {
            return `/page/${parseInt(this.props.pageNum) - 1}`;
        } else {
            return `/`;
        }

    }

    getNextPage() {
        return `/page/${parseInt(this.props.pageNum) + 1}`;
    }

    render() {
        if (!this.props.shouldRender) {
            return <span />;
        }

        var previousButton = '';
        if (1 < this.props.pageNum) {
            previousButton = <Link to={this.getPrevPage()} className="nav-link btn btn-primary">Previous</Link>;
        }

        return (
            <div className="nav justify-content-center">
                <div className="nav-item">
                    {previousButton}
                </div>&nbsp;
                <div className="nav-item">
                    <Link to={this.getNextPage()} className="nav-link btn btn-primary">Next</Link>
                </div>
            </div>
        );
    }
}
