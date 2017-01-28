import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Layout from './containers/blog';
import Single from './containers/single';
import Search from './containers/search';

export default (
    <Route path="/">
        <IndexRoute component={Layout}/>
        <Route path="page/:pageNum" component={Layout} addHandlerKey={true}/>
        <Route path="search/:term" component={Layout}/>
        <Route path="category/:slug" component={Layout}/>
        <Route path="*" component={Single}/>
    </Route>
);
