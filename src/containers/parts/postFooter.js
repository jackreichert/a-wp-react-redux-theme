import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {fetchTaxInfo} from '../../actions';

import Comments from '../comments/comments';

class PostFooter extends Component {
    componentWillMount() {
        this.getTagsInfo(this.props, true);
    }

    componentWillReceiveProps(nextProps) {
        this.getTagsInfo(nextProps);
    }

    getTagsInfo(props, willMount = false) {
        if ((willMount || props.tags !== this.props.tags) && props.tags.length && props.isSingle) {
            this.props.fetchTaxInfo('tags', props.tags);
        }
    }

    renderTags() {
        return <div className="tags nav">
            <span className="nav-link disabled">Tags:</span>
            {this.props.tax.map(tag => {
                return <Link className="nav-link" to={`/tag/${tag.name}`} key={tag.id}>{tag.name}</Link>
            })}
        </div>;
    }

    shouldShowFooter() {
        return this.props.isSingle && this.props.tags.length > 0 && this.props.commentStatus !== 'closed';
    }

    render() {
        return this.shouldShowFooter() ?
            <footer className="card-footer">
                {this.props.tags.length > 0 && this.renderTags()}
                <hr/>
                {this.props.commentStatus !== 'closed' && <Comments pId={this.props.pId}/>}
            </footer> :
            <footer />;
    }
}

function mapStateToProps({tax}) {
    return {tax};
}
export default connect(mapStateToProps, {fetchTaxInfo})(PostFooter);