require('./sass/styles.scss');

import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import store from './store';
const history = createBrowserHistory();

import Blog from './containers/blog';
import Search from './containers/search';
import Category from './containers/category';
import Tag from './containers/tag';
import Single from './containers/single';

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Blog} />
                <Route path="page/:pageNum" component={Blog} addHandlerKey={true}/>
                <Route path="search/:term" component={Search}/>
                <Route path="category/:slug/" component={Category}/>
                <Route path="category/:parent/:slug/" component={Category}/>
                <Route path="category/:slug/:pageNum(\\d+)" component={Category}/>
                <Route path="category/:parent/:slug/:pageNum(\\d+)" component={Category}/>
                <Route path="tag/:slug" component={Tag}/>
                <Route path="tag/:slug/:pageNum(\\d+)" component={Tag}/>
                <Route path="*" component={Single}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('react-main')
);
