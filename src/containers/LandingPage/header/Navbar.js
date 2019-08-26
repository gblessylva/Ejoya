import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { LandingPageContext } from '../index';

const swapNavigationBasedOnAuth = classObj => {
	const { handleNotitficationDisplayState } = useContext(LandingPageContext);

	let auth_token = localStorage.getItem('AUTH_TOKEN');
	if (auth_token) {
		return (
			<>
				<NavLink to="/dashboard" className={classObj && classObj.className}>
					Dashboard
				</NavLink>
				<NavLink
					className={(classObj && classObj.className) || 'navbar__list-link'}
					onClick={() => {
						localStorage.removeItem('AUTH_TOKEN');
						// window.location.reload();
						handleNotitficationDisplayState('Logout Successfully');
					}}
				>
					Logout
				</NavLink>
			</>
		);
	}
	return (
		<>
			<NavLink to="/auth/login" className={(classObj && classObj.className) || 'navbar__list-link'}>
				Login
			</NavLink>
			<NavLink to="/auth" className={(classObj && classObj.className) || 'btn btn-transparent'}>
				Sign Up Here
			</NavLink>
		</>
	);
};

const fullDropNavbar = () => {
	return (
		<div class="full-drop-navbar">
			<input type="checkbox" class="full-drop-navbar__checkbox" id="navi-toggle" />
			<label for="navi-toggle" class="full-drop-navbar__button">
				
				<span class="full-drop-navbar__icon">&nbsp;</span>
			</label>
			<div class="full-drop-navbar__bg">&nbsp;</div>
			<div class="full-drop-navbar__nav">
				<div class="nav-list">
					<NavLink className="full-drop-navbar-link">Why Ejoya</NavLink>
					<NavLink className="full-drop-navbar-link">Partners</NavLink>
					<NavLink className="full-drop-navbar-link">Contact</NavLink>
					{swapNavigationBasedOnAuth({ className: 'full-drop-navbar-link' })}
				</div>
			</div>
		</div>
	);
};

export default () => {
	return (
		<div className="navbar">
			<NavLink to="/" className="navbar__logo" />
			<NavLink className="navbar__list-link">Why Ejoya</NavLink>
			<NavLink className="navbar__list-link">Partners</NavLink>
			<NavLink className="navbar__list-link">Contact</NavLink>
			{swapNavigationBasedOnAuth()}
			{fullDropNavbar()}
		</div>
	);
};
