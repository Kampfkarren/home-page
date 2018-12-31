import { Notification, NotificationHolder } from "../notifications/Notification";
import React, { Component } from "react";

export default class extends Component<{ image: string, link: string, notificationHolder?: NotificationHolder }, { notifications: Notification[] }> {
	timerId: any;

	constructor(props: any) {
		super(props);
		this.state = { notifications: [] };
	}

	async componentWillMount() {
		this.setState({ notifications: this.props.notificationHolder &&
			await this.props.notificationHolder!.getNotifications() || [] });
	}

	render() {
		let notification;

		if(this.props.notificationHolder) {
			let notifications = this.state.notifications;
			if(notifications.length > 0) {
				notification = <span className="notification">{ notifications.length }</span>
			}
		}

		return (
			<a className="Link" href={ this.props.link }>
				<img src={ this.props.image } />
				{ notification }
			</a>
		);
	}
}
