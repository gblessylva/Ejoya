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
} from './types';

import Ejoya from '../configs/httpConfig';
import { storeItem } from '../configs/localStorage';

const AUTH_TOKEN = 'AUTH_TOKEN';
const USER_INFO = 'USER_INFO';

export const loginAuth = payload => async dispatch => {
	dispatch({ type: LOGIN_AUTH_PENDING });
	try {
		let response = await Ejoya.post('/login/', payload);
		if (response.data.token) {
			storeItem(AUTH_TOKEN, response.data.token);
			dispatch({ type: LOGIN_AUTH_SUCCESS });
			return response.data;
		}
	} catch (err) {
		dispatch({ type: LOGIN_AUTH_FAILURE });
	}
};

export const signUpAuth = payload => async dispatch => {
	dispatch({ type: SIGNUP_AUTH_PENDING });
	try {
		let response = await Ejoya.post('/signup/', payload);
		if (response) {
			storeItem(USER_INFO, response.data);
			dispatch({ type: SIGNUP_AUTH_SUCCESS });
			return response;
		}
	} catch (err) {
		dispatch({ type: SIGNUP_AUTH_FAILURE });
	}
};

export const passwordChange = payload => ({ type: PASSWORD_CHANGE, payload });
export const phoneNumberChange = payload => ({ type: PHONE_NUMBER_CHANGE, payload });
export const emailChange = payload => ({ type: EMAIL_CHANGE, payload });
export const stageNameChange = payload => ({ type: STAGE_NAME_CHANGE, payload });
