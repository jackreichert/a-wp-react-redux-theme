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

    renderComments(comments) {
        if (Array.isArray(comments)) {
            return <ul className="comments">{comments.map(comment => {
                return <li key={comment.id} className="comment">
                    <Content>{comment.content.rendered}</Content>
                    <i>{comment.author_name}</i>
                    {this.renderComments(comments.children)}
                </li>;
            })}</ul>
        }
    }

    render() {
        if (this.props.comments.length) {
            const nestedComments = this.nestComments(this.props.comments);
            console.log("nestedComments", nestedComments);
            return <div className="comments">{this.renderComments(this.props.comments)}</div>
        }
        return <div className="comments">No Comments</div>
    }
}

function mapStateToProps({comments}) {
    return {comments};
}

export default connect(mapStateToProps, {fetchComments})(Comments)