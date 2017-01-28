import React, {Component} from 'react';

import Title from './article/title';
import Content from './article/content';
import Meta from './article/meta';

export default class Article extends Component {
    static get defaultProps() {
        return {
            title: "Hello, world!",
            content: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!"
        }
    }

    getClasses(piece) {
        return this.props.isSingle ? 'card single w-75' : 'card archive';
    }

    getFeaturedImageSrc() {
        if (this.props.featuredImage) {
            return this.props.isSingle ? this.props.featuredImage.large : this.props.featuredImage.full;
        } else {
            return '';
        }
    }

    render() {
        return (
            <article className={this.getClasses('article')}>
                <img src={this.getFeaturedImageSrc()} className="card-img-top img-fluid"/>
                <div className="card-block">
                    <Title link={this.props.link} isSingle={this.props.isSingle}>
                        {this.props.title}
                    </Title>
                    <Meta categories={this.props.categories}
                          date={this.props.date}
                          formattedDate={this.props.formattedDate}
                          type={this.props.type}
                          isSingle={this.props.isSingle} />
                    <Content isSingle={this.props.isSingle}>
                        {this.props.content}
                    </Content>
                </div>
            </article>
        );
    }
}