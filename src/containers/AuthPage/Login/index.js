import React, { useContext } from 'react';

import { GradientButton } from '../../sharedComponents';
import { AuthContext, LoadingSpinner } from '../index';

export default () => {
	const { emailChange, passwordChange, handleLogin, loginAuthPending, loginError, loggedIn } = useContext(
		AuthContext
	);

	return (
		<div className="creactacct__form">
			<div className="heading__text">
				<h1 className="heading-primary">Login Here</h1>
				<h6 className="heading-6 font-weight--5">Login to your account here</h6>
			</div>
			<form>
				<label htmlFor="artist-email" className="heading-6 font-weight--6 ">
					What's your Email?
				</label>
				<input
					type="email"
					id="artist-email"
					className="input margin-bottom--1-5"
					placeholder="Enter your email"
					onChange={e => emailChange(e.target.value)}
					required
				/>
				<label htmlFor="artist-password" className="heading-6 font-weight--6 ">
					What's your password?
				</label>
				<input
					type="password"
					id="artist-password"
					className="margin-top--3-1"
					placeholder="Enter your password"
					required
					onChange={e => passwordChange(e.target.value)}
				/>
				{(loginAuthPending && !loginError && <LoadingSpinner />) || (
					<GradientButton onClickHandler={handleLogin} btnText="Login" />
				)}
			</form>
		</div>
	);
};
