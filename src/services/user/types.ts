import { type Store } from 'pinia';

export interface UserSettings {
  chart_visible: boolean;
  list_visible: boolean;
}

export interface IUserService {
  loadSettings: () => void;
  changeSettings: (settings: Partial<UserSettings>) => void;
  useStore: () => Store;
}
