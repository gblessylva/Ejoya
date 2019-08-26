import React, { Component, createContext, useContext } from 'react';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { Route, NavLink } from 'react-router-dom';

import CreateForm from './CreateAccount';
import LoginForm from './Login';
import {
	emailChange,
	passwordChange,
	stageNameChange,
	phoneNumberChange,
	signUpAuth,
	loginAuth,
} from '../../actions/authActions';
import { handleNotitficationDisplayState } from '../../actions/notificationActions';

export const AuthContext = createContext();

export const LoadingSpinner = () => {
	const { signUpPending, loginAuthPending } = useContext(AuthContext);
	return (
		<div className="loading__spinner-box">
			<BeatLoader
				css={{
					margin: '0 auto',
					display: 'block',
				}}
				loading={signUpPending || loginAuthPending}
			/>
		</div>
	);
};

class CreateAccount extends Component {
	state = {
		passwordStrength: 1,
	};

	handleSignup = e => {
		e.preventDefault();
		const {
			email,
			password,
			stageName,
			signUpAuth,
			phoneNumber,
			history,
			handleNotitficationDisplayState,
		} = this.props;
		if (password && email && stageName) {
			signUpAuth({ password, email, phonenumber: phoneNumber, fullname: stageName }).then(res => {
				if (res) {
					history.push('/auth/login');
					handleNotitficationDisplayState('Your signup was successful');
				}
			});
		}
		return;
	};

	handleLogin = e => {
		e.preventDefault();
		const { email, password, history, loginAuth, handleNotitficationDisplayState } = this.props;
		if (email && password) {
			loginAuth({ email, password }).then(res => {
				if (res) {
					history.push('/dashboard');
					handleNotitficationDisplayState('Your login was successful');
				}
			});
		}
		return;
	};

	calcPasswordStrength = password => {
		if (/\d+/.test(password)) {
			this.setState({ passwordStrength: 2 });
		} else if (/\$|&|\+|,|:|;|=|@|#/.test(password)) {
			this.setState({ passwordStrength: 3 });
		} else {
			this.setState({ passwordStrength: 1 });
		}
	};

	render() {
		const { passwordStrength: strength } = this.state;
		const {
			match: { url },
		} = this.props;
		let strengthChecker = strength === 1 ? 'Weak!' : strength === 2 ? 'Fair!' : 'Strong!';
		return (
			<AuthContext.Provider
				value={{
					...this.props,
					strengthChecker,
					handleSignup: this.handleSignup,
					handleLogin: this.handleLogin,
					calcPasswordStrength: this.calcPasswordStrength,
				}}
			>
				<main className="createacct">
					<section className="logo-box">
						<NavLink to="/">
							<div className="ejoya-box" />
						</NavLink>
					</section>
					<section className="createacct_formbox">
						<Route exact path={`${url}`} component={CreateForm} />
						<Route path={`${url}/login`} component={LoginForm} />
						{/* component by css ref(_headercontent.scss) */}
						<div className="bg__image-box box-shadow-bg">
							<div className="header__content-image" />
						</div>
					</section>
				</main>
			</AuthContext.Provider>
		);
	}
}

const mapStateToProps = ({
	signAuthReducer: { email, password, stageName, phoneNumber, signUpPending, signUpError },
	loginAuthReducer: { loginAuthPending, loginError, loggedIn },
}) => ({
	email,
	password,
	stageName,
	phoneNumber,
	signUpPending,
	signUpError,
	loginAuthPending,
	loginError,
	loggedIn,
});

export default connect(
	mapStateToProps,
	{
		emailChange,
		passwordChange,
		stageNameChange,
		phoneNumberChange,
		signUpAuth,
		loginAuth,
		handleNotitficationDisplayState,
	}
)(CreateAccount);
