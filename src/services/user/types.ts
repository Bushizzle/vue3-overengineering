import { Store } from 'pinia';

export type UserSettings = {
	graph_visible: boolean;
	list_visible: boolean;
}
export interface IUserService {
	loadSettings() : void;
	changeSettings(settings: Partial<UserSettings>) : void;
	useStore() : Store;
}