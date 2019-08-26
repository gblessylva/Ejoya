import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reduxLogger from 'redux-logger';
import reducers from './reducers';
import NotificationWrapper from './containers/NotificationManager';

import './scss/index.scss';
import * as serviceWorker from './serviceWorker';
import UploadTracker from '../src/containers/sharedComponents/uploadTracker';

const store = createStore(reducers, applyMiddleware(reduxLogger, thunk));
const StateManagedApp = (
	<Provider store={store}>
		<UploadTracker />
		<NotificationWrapper>
			<App />
		</NotificationWrapper>
	</Provider>
);

ReactDOM.render(StateManagedApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
