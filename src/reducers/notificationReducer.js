import {
	NOTIFICATION_MESSAGE,
	SHOW_NOTIFICATION_MESSAGE,
	HIDE_NOTIFICATION_MESSAGE,
	STORE_NOTIFICATION_TIMERID,
} from '../actions/types';
import createReducer from './reducerCreator';

export default createReducer(
	{
		notifymsg: '',
		showNotification: false,
		lastNotificationTimer: '',
	},
	{
		[NOTIFICATION_MESSAGE]: (state, { payload }) => ({ ...state, notifymsg: payload }),
		[SHOW_NOTIFICATION_MESSAGE]: state => ({ ...state, showNotification: true }),
		[HIDE_NOTIFICATION_MESSAGE]: state => ({ ...state, showNotification: false }),
		[STORE_NOTIFICATION_TIMERID]: (state, { payload }) => ({ ...state, lastNotificationTimer: payload }),
	}
);
