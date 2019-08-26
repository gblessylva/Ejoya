import { combineReducers } from 'redux';

import { loginAuthReducer, signAuthReducer } from './authReducer';
import notificationReducer from './notificationReducer';
import releaseReducer from './releaseReducer';

export default combineReducers({
	loginAuthReducer,
	signAuthReducer,
	notificationReducer,
	releaseReducer,
});
