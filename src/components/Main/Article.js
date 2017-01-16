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

    getClasses(piece) {
        switch (piece) {
            case 'article':
                return this.props.isSingle ? 'card single w-75' : 'card archive';
        }
    }

    renderFeaturedImage() {
        if (this.props.featuredImage) {
            return this.props.isSingle ?
                <img src={this.props.featuredImage.large} className="card-img-top img-fluid"/> :
                <img src={this.props.featuredImage.full} className="card-img-top img-fluid"/>;
        } else {
            return '';
        }
    }

    render() {
        return (
            <article className={this.getClasses('article')}>
                {this.renderFeaturedImage()}
                <div className="card-block">
                    <Title link={this.props.link} isSingle={this.props.isSingle}>
                        {this.props.title}
                    </Title>
                    <Content isSingle={this.props.isSingle}>
                        {this.props.content}
                    </Content>
                </div>
            </article>
        );
    }
}