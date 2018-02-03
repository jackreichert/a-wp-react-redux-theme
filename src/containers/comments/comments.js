import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchComments} from '../../actions';

import Comment from '../../components/main/article/comment';
import CommentForm from './comment-form';

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
		return <ul className="comments">{Object.keys(nestedComments).
			map(commentId => {
				const comment = nestedComments[commentId].comment;
				return <li key={commentId} className="comment card">
					{(comment.id) ?
						<Comment comment={comment} pId={this.props.pId}/>
						: ''}
					{this.renderNestedComments(
						nestedComments[commentId].children)}
				</li>;
			})}</ul>;
	}

	render() {
		var commentsRendered = '';
		if (this.props.comments.length) {
			const nestedComments = this.nestComments(this.props.comments);
			commentsRendered = this.renderNestedComments(nestedComments);
		} else {
			commentsRendered = <div className="comments">No Comments</div>;
		}
		return <div>{commentsRendered}<CommentForm pId={this.props.pId}/></div>;
	}
}

function mapStateToProps({comments}) {
	return {comments};
}

export default connect(mapStateToProps, {fetchComments})(Comments);