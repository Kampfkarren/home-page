import React, { Component } from "react";
import { notificationHolders } from "../notifications";
import { Notification, NotificationHolder } from "../notifications/Notification";

type NotificationHolders = { [key: string]: Notification[] };

export default class extends Component<{}, { notifications: NotificationHolders }> {
	constructor(props: any) {
		super(props);
		this.state = { notifications: {} };
	}

	async componentDidMount() {
		let notifications: NotificationHolders = {};

		for(let notificationHolder of Object.values(notificationHolders)) {
			notifications[notificationHolder.icon] = await notificationHolder.getNotifications();
		}

		this.setState({ notifications: notifications });
	}

	render() {
		let notifications = [];
		let notificationId = 0;

		for(let notificationHolderIcon in this.state.notifications) {
			for(let notification of this.state.notifications[notificationHolderIcon]) {
				notifications.push(<li key={notificationId++}>
					<img src={ notificationHolderIcon } />
					<a href={ notification.link }>{ notification.description }</a>
				</li>);
			}
		}

		return (
			<ul className="Notifications">
				{ notifications }
			</ul>
		);
	}
}
