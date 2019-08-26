import {
	NOTIFICATION_MESSAGE,
	SHOW_NOTIFICATION_MESSAGE,
	HIDE_NOTIFICATION_MESSAGE,
	STORE_NOTIFICATION_TIMERID,
} from './types';

export const setNotificationMsg = payload => ({ type: NOTIFICATION_MESSAGE, payload });
export const showNotificationMsg = () => ({ type: SHOW_NOTIFICATION_MESSAGE });
export const hideNotificationMsg = () => ({ type: HIDE_NOTIFICATION_MESSAGE });
export const storeNotificationTimerId = payload => ({ type: STORE_NOTIFICATION_TIMERID, payload });
export const handleNotitficationDisplayState = notificationMsg => dispatch => {
	dispatch(setNotificationMsg(notificationMsg));
	dispatch(showNotificationMsg());
	let notificationTimerId = setTimeout(() => dispatch(hideNotificationMsg()), 5000);
	setTimeout(() => dispatch(storeNotificationTimerId(notificationTimerId)), 5001);
};
