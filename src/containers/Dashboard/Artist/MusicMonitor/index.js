import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import Music from './Music';
import Region from './Region';

export default class MusicMonitor extends Component {
	render() {
		const {
			match: { url },
		} = this.props;
		return (
			<main className="monitor">
				<div className="monitor__heading">
					<h3 className="heading-3 font-weight--3 line-height--1">Music Monitor</h3>
					<div className="search-inputbox">
						<span className="rounded-trademark" />
						<input className="search-input" type="text" placeholder="Search Catalogue" />
					</div>
				</div>
				<div className="monitor__nav">
					<NavLink to={url} className="monitor__nav-item">
						Music
					</NavLink>
					<NavLink to={`${url}/region`} className="monitor__nav-item">
						Regions
					</NavLink>
				</div>
				<Switch>
					<Route exact path={url} component={Music} />
					<Route path={`${url}/region`} component={Region} />
				</Switch>
			</main>
		);
	}
}
