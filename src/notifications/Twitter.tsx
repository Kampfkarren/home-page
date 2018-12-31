import { Notification, NotificationHolder } from "./Notification";

export default class extends NotificationHolder {
	readonly icon: string = "./links/twitter.svg";

	async getNotificationsAsync(): Promise<Notification[]> {
		return [];
	}
}
