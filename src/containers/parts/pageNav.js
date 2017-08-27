import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class PageNav extends Component {
    getPrevPage() {
        const pageNum = parseInt(this.props.routerMatch.params.pageNum) || 1;
        return (pageNum > 2) ? `${this.getSlug()}/page/${pageNum - 1}/` : `/`;
    }

    getSlug() {
        if (('undefined' !== typeof this.props.routerMatch.params.slug || 'undefined' !== typeof this.props.routerMatch.params.term) && 'undefined' !== typeof this.props.routerMatch.url) {
            let tax = 'category';
            let urlParts = this.props.routerMatch.url.split('/');
            if (urlParts.length) {
                urlParts = urlParts.filter(part => {
                    return "" !== part && this.props.routerMatch.params.slug !== part
                });
                if (urlParts.length) {
                    tax = urlParts[0];
                }
            }
            let slug = this.props.routerMatch.params.slug || this.props.routerMatch.params.term;
            return `/${tax}/${slug}`;
        } else {
            return "";
        }
    }

    getNextPage() {
        const pageNum = parseInt(this.props.routerMatch.params.pageNum) || 1;
        return `${this.getSlug()}/page/${pageNum + 1}/`;
    }

    render() {
        if (this.props.shouldRender) {
            return (
                <div className="nav justify-content-center">
                    <div className="nav-item">
                        {(1 < this.props.routerMatch.params.pageNum) ?
                            <Link to={this.getPrevPage()} className="nav-link btn btn-primary">Previous</Link> : ''}
                    </div>
                    &nbsp;
                    <div className="nav-item">
                        <Link to={this.getNextPage()} className="nav-link btn btn-primary">Next</Link>
                    </div>
                </div>
            );
        } else {
            return <span/>;
        }
    }
}

function mapStateToProps({routerMatch}) {
    return {routerMatch};
}

export default connect(mapStateToProps)(PageNav);