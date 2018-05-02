import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchTaxInfo} from '../../actions';

import Comments from '../comments/comments';

class PostFooter extends Component {
    componentWillMount() {
        if ('undefined' !== typeof this.props.tagIds && this.props.tagIds.length && this.props.isSingle) {
            this.props.fetchTaxInfo('tags', this.props.tagIds);
        }
    }

    componentWillReceiveProps(nextProps) {
        if ((this.props.tagIds !== nextProps.tagIds || this.props.tagIds.length !== this.props.tags.length)
            && nextProps.tagIds.length && nextProps.isSingle) {
            this.props.fetchTaxInfo('tags', nextProps.tagIds);
        }
    }

    renderTags() {
        return <div className="tags nav">
            <span className="nav-link disabled">Tags:</span>
            {this.props.tags.map(tag => {
                return <Link className="nav-link" to={`/tag/${tag.name}`} key={tag.id}>{tag.name}</Link>
            })}
        </div>;
    }

    shouldShowFooter() {
        return this.props.isSingle && (this.props.tags.length > 0 || this.props.commentStatus !== 'closed');
    }

    render() {
        return this.shouldShowFooter() ?
            <footer className="card-footer">
                {'undefined' !== typeof this.props.tagIds && this.props.tagIds.length > 0 && this.renderTags()}
                <hr/>
                {this.props.commentStatus !== 'closed' && <Comments pId={this.props.pId}/>}
            </footer> :
            <footer/>;
    }
}

function mapStateToProps({tags}) {
    return {tags};
}

export default connect(mapStateToProps, {fetchTaxInfo})(PostFooter);