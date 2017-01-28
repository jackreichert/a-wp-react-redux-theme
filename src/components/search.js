import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Search extends Component {
    componentDidMount() {
        console.log(this.props.searchTerm);
        if ( this.props.isSearch) {
            this.searchInput.focus();
        }
    }

    handleSearch(event) {
        event.preventDefault();
        const searchTerm = event.target.value;
        if (0 < searchTerm.length) {
            browserHistory.push(`/search/${searchTerm}`);
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
                       value={this.props.searchTerm}
                       ref={(input) => this.searchInput = input}
                       onChange={this.handleSearch.bind(this)}
                       className="form-control mr-sm-2"
                       placeholder="Search for..."/>
            </form>
        );
    }
}