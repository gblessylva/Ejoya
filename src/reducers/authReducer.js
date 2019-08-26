import {
	LOGIN_AUTH_PENDING,
	LOGIN_AUTH_FAILURE,
	LOGIN_AUTH_SUCCESS,
	SIGNUP_AUTH_PENDING,
	SIGNUP_AUTH_FAILURE,
	SIGNUP_AUTH_SUCCESS,
	EMAIL_CHANGE,
	PASSWORD_CHANGE,
	PHONE_NUMBER_CHANGE,
	STAGE_NAME_CHANGE,
} from '../actions/types';
import createReducer from './reducerCreator';

export const loginAuthReducer = createReducer(
	{
		loggedIn: false,
		loginAuthPending: false,
		loginError: '',
	},
	{
		[LOGIN_AUTH_PENDING]: state => ({ ...state, loginAuthPending: true, loginError: '' }),
		[LOGIN_AUTH_FAILURE]: state => ({
			...state,
			loginAuthPending: false,
			loginError: 'Could not Signup Successfully',
		}),
		[LOGIN_AUTH_SUCCESS]: state => ({ ...state, loginAuthPending: false, loginError: true, loggedIn: true }),
	}
);

export const signAuthReducer = createReducer(
	{
		signedUp: false,
		signUpPending: false,
		signUpError: '',
	},
	{
		[SIGNUP_AUTH_PENDING]: state => ({ ...state, signUpPending: true, signUpError: '' }),
		[SIGNUP_AUTH_FAILURE]: state => ({
			...state,
			signUpPending: false,
			signUpError: 'Could not signup successfully',
		}),
		[SIGNUP_AUTH_SUCCESS]: state => ({ ...state, signUpPending: false, signedUp: true }),
		[EMAIL_CHANGE]: (state, { payload: email }) => ({ ...state, email }),
		[PASSWORD_CHANGE]: (state, { payload: password }) => ({ ...state, password }),
		[STAGE_NAME_CHANGE]: (state, { payload: stageName }) => ({ ...state, stageName }),
		[PHONE_NUMBER_CHANGE]: (state, { payload: phoneNumber }) => ({ ...state, phoneNumber }),
	}
);
