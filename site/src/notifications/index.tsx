import { NotificationHolder } from "./Notification";
import Twitter from "./Twitter";

export let notificationHolders: { [name: string]: NotificationHolder } = {
	"Twitter": new Twitter(),
};
