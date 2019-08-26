import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { IoIosClose } from 'react-icons/io';
import { hideNotificationMsg } from '../../actions/notificationActions';

class NotificationManager extends Component {
	notificationWrapper = createRef();

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.lastNotificationTimer !== this.props.lastNotificationTimer) {
			clearTimeout(this.props.lastNotificationTimer);
		}
		if (this.props.showNotification) {
			/**
			 * @TODO  rather than scrolling
			 * the page up automatically why not show notification based on present scrollTop value
			 * for instance if the scrollTop value is 10
			 * the showcase notifcation msg box 5rem( in css ) from the scrolltop
			 */
		}
	}

	render() {
		const { children, notifymsg, showNotification, hideNotificationMsg } = this.props;
		if (!showNotification) return <div ref={this.notificationWrapper}>{children}</div>;
		return (
			<div>
				<div className="notification_msgbox">
					{/* <h5 className="notification_type">info</h5> */}

					<div className="notification__logo" />
					<p className="notification_msg">{notifymsg}</p>
					<span className="notification_close" onClick={() => hideNotificationMsg()}>
						<IoIosClose />
					</span>
				</div>
				<>{children}</>
			</div>
		);
	}
}

export default connect(
	({ notificationReducer: { notifymsg, showNotification, lastNotificationTimer } }) => ({
		notifymsg,
		showNotification,
		lastNotificationTimer,
	}),
	{
		hideNotificationMsg,
	}
)(NotificationManager);
