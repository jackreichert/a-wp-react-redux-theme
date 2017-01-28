import React, {Component} from 'react';
import { Link } from 'react-router';

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
        return this.props.isSingle ? 'card single w-75' : 'card archive';
    }

    renderCategories() {
        if ('undefined' !== typeof this.props.categories) {
            return this.props.categories.map(cat => {
                if (1 == this.props.categories.length || cat.slug !== 'uncategorized') {
                    return <Link to={`/category/${cat.slug}`} key={cat.term_id}>{cat.name}</Link>
                }
            });
        }
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
                    <p className="cats">{this.renderCategories()}</p>
                    <Content isSingle={this.props.isSingle}>
                        {this.props.content}
                    </Content>
                </div>
            </article>
        );
    }
}