import React, {Component} from 'react';

import Title from './article/title';
import Content from './article/content';

export default class Article extends Component {
    static get defaultProps() {
        return {
            title: "Hello, world!",
            content: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!"
        }
    }

    render() {
        return (
            <article className="col-md-3 col-sm-4 col-xs-12">
                <Title link={this.props.link}>
                    {this.props.title}
                </Title>
                <Content>
                    {this.props.content}
                </Content>
            </article>
        );
    }
}