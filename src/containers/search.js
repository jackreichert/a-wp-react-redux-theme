import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { searchSite, fetchPosts } from '../actions';

class Search extends Component {
    constructor() {
        super();
    }

    handleSearch(event) {
        const term = event.target.value;
        if (2 < term.length) {
            browserHistory.push(`/search/${term}`);
        } else {
            browserHistory.push('/');
        }
    }

    render() {
        return (
            <form className="form-inline my-2 my-lg-0">
                <input type="search"
                       value={this.props.term}
                       onChange={this.handleSearch.bind(this)}
                       className="form-control mr-sm-2"
                       placeholder="Search for..."/>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchSite, fetchPosts }, dispatch);
}

export default connect(null,mapDispatchToProps)(Search);