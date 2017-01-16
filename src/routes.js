import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Layout from './components/Layout';

export default (
    <Route path="/">
        <IndexRoute component={Layout}/>
        <Route path="page/:pageNum" component={Layout} addHandlerKey={true}/>
        <Route path="search/:term" component={Layout}/>
        <Route path="*" component={Layout}/>
    </Route>
);
