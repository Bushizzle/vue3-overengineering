import { Store } from 'pinia';

export type UserSettings = {
	chart_visible: boolean;
	list_visible: boolean;
}
export interface IUserService {
	loadSettings() : void;
	changeSettings(settings: Partial<UserSettings>) : void;
	useStore() : Store;
}