import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Meta extends Component {
    renderCategories() {
        if ('undefined' !== typeof this.props.categories) {
            return this.props.categories.map((cat, i) => {
                if (1 == this.props.categories.length || cat.slug !== 'uncategorized') {
                    return (<span key={cat.term_id}>
                        <Link to={this.getCategoryPath(cat.link)} className="cat-links">{cat.name}</Link>
                        {(1 < this.props.categories.length && i < (this.props.categories.length - 1)) ? ', ' : ''}
                        </span>);
                }
            });
        }
    }

    getCategoryPath(link) {
        var el = document.createElement('a');
        el.href = link;
        return el.pathname;
    }

    renderDates() {
        if ('post' === this.props.type && this.props.isSingle ) {
            return  <span> | <time dateTime={this.props.date.substring(0,10)}>{this.props.formattedDate}</time></span>;
        }
    }

    render() {
        return (<div className="meta">
            <div className="cats">{this.renderCategories()}{this.renderDates()}</div>
        </div>);
    }
}