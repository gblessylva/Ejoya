import React, { useContext } from 'react';

import { GradientButton } from '../../sharedComponents';
import { AuthContext, LoadingSpinner } from '../index';

export default () => {
	const {
		emailChange,
		passwordChange,
		stageNameChange,
		phoneNumberChange,
		signUpPending,
		signUpError,
		strengthChecker,
		handleSignup,
		calcPasswordStrength,
	} = useContext(AuthContext);

	return (
		<div className="creactacct__form">
			<div className="heading__text">
				<h1 className="heading-primary">Create An Account</h1>
				<h6 className="heading-6 font-weight--5">Create an Account to Get started</h6>
			</div>
			<form>
				<div className="form-group">
					<label htmlFor="stage-name" className="heading-6 font-weight--6 ">
						What's your Stage Name?
					</label>
					<input
						id="stage-name"
						type="text"
						className="input"
						placeholder="Enter your stage name"
						onChange={e => stageNameChange(e.target.value)}
						required
					/>
					<div className="tooltip right">
						<span />
						<div className="tooltip__text">
							<p>You are encouraged to stick to this name throught out</p>
						</div>
					</div>
				</div>
				<label htmlFor="artist-email" className="heading-6 font-weight--6 ">
					What's your Email?
				</label>
				<input
					type="email"
					id="artist-email"
					className="input"
					placeholder="Enter your email"
					onChange={e => emailChange(e.target.value)}
					required
				/>
				<label htmlFor="artist-phonenumber" className="heading-6 font-weight--6 ">
					What's your phone number?
				</label>
				<input
					type="number"
					id="artist-phonenumber"
					className="input"
					placeholder="Enter your phone number"
					onChange={e => phoneNumberChange(e.target.value)}
					required
				/>
				<div className="form-group">
					<label htmlFor="artist-password" className="heading-6 font-weight--6 ">
						What's your password?
					</label>
					<input
						type="password"
						id="artist-password"
						placeholder="Enter your password"
						required
						onChange={e => {
							passwordChange(e.target.value);
							calcPasswordStrength(e.target.value);
						}}
					/>
					<div className="tooltip right">
						<span />
						<div className="tooltip__text">
							<p>password must contain a number and special characters to be secure</p>
						</div>
					</div>
				</div>
				<div className="validation__bars">
					<p className={strengthChecker.replace('!', '')}>
						<span>&nbsp;</span>
						<span>&nbsp;</span>
						<span>&nbsp;</span>
						<span className="heading-6 font-weight--6">{strengthChecker}</span>
					</p>
				</div>
				{(signUpPending && !signUpError && <LoadingSpinner />) || (
					<GradientButton onClickHandler={handleSignup} btnText="Get Started" />
				)}
			</form>
		</div>
	);
};
