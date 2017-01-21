import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Search extends Component {
    handleSearch(event) {
        event.preventDefault();
        const term = event.target.value;
        if (2 < term.length) {
            browserHistory.push(`/search/${term}`);
        } else {
            browserHistory.push('/');
        }
    }

    submit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submit} className="form-inline my-2 my-lg-0">
                <input type="search"
                       value={this.props.term}
                       onChange={this.handleSearch.bind(this)}
                       className="form-control mr-sm-2"
                       placeholder="Search for..."/>
            </form>
        );
    }
}