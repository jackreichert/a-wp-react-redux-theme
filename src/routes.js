import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Blog from './containers/blog';
import Search from './containers/search';
import Category from './containers/category';
import Tag from './containers/tag';
import Single from './containers/single';

export default (
    <Route path="/">
        <IndexRoute component={Blog}/>
        <Route path="page/:pageNum" component={Blog} addHandlerKey={true}/>
        <Route path="search/:term" component={Search}/>
        <Route path="category/:slug" component={Category}/>
        <Route path="category/:slug/:pageNum" component={Category}/>
        <Route path="tag/:slug" component={Tag}/>
        <Route path="tag/:slug/:pageNum" component={Tag}/>
        <Route path="*" component={Single}/>
    </Route>
);
