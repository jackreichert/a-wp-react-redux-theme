import React, { Component } from 'react';
import { Link } from 'react-router';

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
		var previousButton = '';
		if (1 < this.props.pageNum) {
			previousButton = <Link to={this.getPrevPage()} className="btn btn-primary pull-right">Previous</Link>;
		}

		return (
			<div className="row">
				<div className="col-xs-1 col-xs-offset-4">
					{previousButton}
				</div>
				<div className="col-xs-1 col-xs-offset-1">
					<Link to={this.getNextPage()} className="btn btn-primary">Next</Link>
				</div>
			</div>
		);
	}
}
