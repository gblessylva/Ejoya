import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import LandingPage from './containers/LandingPage';
import AuthPage from './containers/AuthPage';
import Dashboard from './containers/Dashboard';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/auth" component={AuthPage} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
			</Router>
		);
	}
}

export default App;
