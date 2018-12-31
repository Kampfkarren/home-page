export abstract class NotificationHolder {
	abstract readonly icon: string;
	abstract async getNotificationsAsync(): Promise<Notification[]>;
	_notifications: Notification[] | undefined;

	async getNotifications(): Promise<Notification[]> {
		if(this._notifications === undefined) {
			let notifications = await this.getNotificationsAsync();
			this._notifications = notifications;
			return notifications;
		} else {
			return this._notifications;
		}
	}
}

export class Notification {
	readonly description: string;
	readonly link: string;

	constructor(description: string, link: string) {
		this.description = description;
		this.link = link;
	}
}
