import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

class Content extends Component {
	constructor() {
		super();
	}

	navigate(event) {
		if (event.target.tagName === 'A') {
			let href = event.target.getAttribute('href');
			if ((href.includes(RT_API.baseUrl) || href.startsWith('/')) && '_blank' !== event.target.getAttribute('target').toLowerCase()) {
				event.preventDefault();
				href = href.replace(RT_API.baseUrl, '');
				this.props.history.push(href);
			}
		}
	}

	render() {
		return (<div
			className="card-text"
			dangerouslySetInnerHTML={{__html: this.props.children}}
			onClick={event => this.navigate(event)}/>);
	}
}

function mapStateToProps({router}) {
	return {router};
}

export default withRouter(connect()(Content));