import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchComments} from '../../actions';

import Content from '../../components/main/article/content';

class Comments extends Component {
    componentWillMount() {
        this.props.fetchComments(this.props.pId);
    }

    renderComments() {
        return this.props.comments.map(comment => {
            return <div key={comment.id}>
                <Content>{comment.content.rendered}</Content>
                <i>{comment.author_name}</i>
            </div>;
        });
    }

    render() {
        if (this.props.comments.length) {
            return <div className="comments">{this.renderComments()}</div>
        }
        return <div className="comments">No Comments</div>
    }
}

function mapStateToProps({comments}) {
    return {comments};
}

export default connect(mapStateToProps, {fetchComments})(Comments)