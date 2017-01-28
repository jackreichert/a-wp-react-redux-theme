import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Blog from './containers/blog';
import Single from './containers/single';
import Search from './containers/search';

export default (
    <Route path="/">
        <IndexRoute component={Blog}/>
        <Route path="page/:pageNum" component={Blog} addHandlerKey={true}/>
        <Route path="search/:term" component={Search}/>
        <Route path="category/:slug" component={Blog}/>
        <Route path="*" component={Single}/>
    </Route>
);
