import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './components/Layout';

var app = document.getElementById('react-main');

ReactDom.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<Route path="p/:pageNum" component={Layout} addHandlerKey={true} />
		</Route>
	</Router>,
	app
);
