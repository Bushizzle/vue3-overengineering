import type { Store } from 'pinia';
import { Logger } from '../../utils/logger';
import type { IUserService, UserSettings } from './types';
import { USER_SETTINGS_KEY } from './constants';
import { useUserStore } from './store';

// Maybe this service should be a singleton, encapsulated in _instance parameter
export class UserService implements IUserService {
  store = useUserStore();

  constructor() {
    this.loadSettings();
  }

  useStore = (): Store => this.store;

  loadSettings(): void {
    const settings = localStorage.getItem(USER_SETTINGS_KEY);
    if (settings) {
      try {
        this.changeSettings(JSON.parse(settings) as Partial<UserSettings>);
      } catch (error) {
        Logger.error(error);
      }
    }
  }

  public changeSettings(settings: Partial<UserSettings>): void {
    for (const key in settings) {
      if (key in this.store.settings) {
        this.store.change(key as keyof UserSettings, settings[key as keyof UserSettings] as boolean);
      }
    }
    this.saveSettings();
  }

  public toggleVisibility(key: keyof UserSettings): void {
    this.store.change(key, !this.store.settings[key]);
    this.saveSettings();
  }

  public saveSettings(): void {
    localStorage.setItem(USER_SETTINGS_KEY, JSON.stringify(this.store.settings));
  }
}
