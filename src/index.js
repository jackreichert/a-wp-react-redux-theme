import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';

import routes from './routes';
import store from './store';

ReactDom.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('react-main')
);
