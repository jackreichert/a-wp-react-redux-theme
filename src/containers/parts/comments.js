import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchComments} from '../../actions';

import Content from '../../components/main/article/content';

class Comments extends Component {
    componentWillMount() {
        this.props.fetchComments(this.props.pId);
    }

    nestComments(comments) {
        const nestedComments = {};
        for (const comment of comments) {
            if (comment.id in nestedComments) {
                nestedComments[comment.id].comment = comment;
            } else {
                nestedComments[comment.id] = {comment: comment, children: {}};
            }

            if (comment.parent in nestedComments) {
                nestedComments[comment.parent].children[comment.id] = nestedComments[comment.id];
                delete nestedComments[comment.id];
            } else {
                nestedComments[comment.parent] = {comment: {}, children: {}};
                nestedComments[comment.parent].children[comment.id] = nestedComments[comment.id];
                delete nestedComments[comment.id];
            }

        }
        return nestedComments;
    }

    renderNestedComments(nestedComments) {
        return <ul className="comments">{Object.keys(nestedComments).map(commentId => {
            const comment = nestedComments[commentId].comment;
            return <li key={commentId} className="comment card">
                {(comment.id) ?
                    <div className="card-block">
                        <Content>{comment.content.rendered}</Content>
                        <i>{comment.author_name}</i>
                    </div>
                    : ''}
                {this.renderNestedComments(nestedComments[commentId].children)}
            </li>
        })}</ul>;
    }

    render() {
        if (this.props.comments.length) {
            const nestedComments = this.nestComments(this.props.comments);
            return this.renderNestedComments(nestedComments[0].children);
        }
        return <div className="comments">No Comments</div>
    }
}

function mapStateToProps({comments}) {
    return {comments};
}

export default connect(mapStateToProps, {fetchComments})(Comments)