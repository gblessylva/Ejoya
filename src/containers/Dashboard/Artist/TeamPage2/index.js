import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Single from './Single';
import Album from './Album';

class TeamPage extends Component {
	render() {
		const {
			match: { url },
		} = this.props;
		return (
			<div className="teampage-2">
				<div className="monitor__heading">
					<h3 className="heading-3 font-weight--3 line-height--1">Marketing</h3>
					<div className="search-inputbox">
						<span className="rounded-trademark" />
						<input className="search-input" type="text" placeholder="Search Catalogue" />
					</div>
				</div>
				<div className="monitor__nav">
					<NavLink to={url} className="monitor__nav-item">
						Album
					</NavLink>
					<NavLink to={`${url}/singles`} className="monitor__nav-item">
						Singles
					</NavLink>
				</div>
				<Switch>
					<Route exact path={url} component={Album} />
					<Route path={`${url}/singles`} component={Single} />
				</Switch>
			</div>
		);
	}
}

export default TeamPage;
