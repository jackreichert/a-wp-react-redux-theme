import React, {Component} from 'react';

export default class Content extends Component {
    render() {
        return (<div className="card-text" dangerouslySetInnerHTML={ {__html: this.props.children} }/>);
    }
}
