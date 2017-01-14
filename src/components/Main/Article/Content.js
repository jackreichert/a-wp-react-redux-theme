import React, {Component} from 'react';

export default class Content extends Component {
    render() {
        return (<div dangerouslySetInnerHTML={ {__html: this.props.children} }/>);
    }
}
