import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../features/auth/types/auth.types';

const STORAGE_KEYS = {
  USER: 'auth_user',
  TOKEN: 'auth_token',
  IS_LOGGED_IN: 'auth_is_logged_in',
};

export const storageService = {
  async saveUser(user: User): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    } catch (error) {
      console.error('Error saving user:', error);
    }
  },

  async getUser(): Promise<User | null> {
    try {
      const user = await AsyncStorage.getItem(STORAGE_KEYS.USER);
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error getting user:', error);
      return null;
    }
  },

  async saveToken(token: string): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.TOKEN, token);
    } catch (error) {
      console.error('Error saving token:', error);
    }
  },

  async getToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(STORAGE_KEYS.TOKEN);
    } catch (error) {
      console.error('Error getting token:', error);
      return null;
    }
  },

  async setLoggedIn(isLoggedIn: boolean): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.IS_LOGGED_IN, JSON.stringify(isLoggedIn));
    } catch (error) {
      console.error('Error setting logged in status:', error);
    }
  },

  async isLoggedIn(): Promise<boolean> {
    try {
      const loggedIn = await AsyncStorage.getItem(STORAGE_KEYS.IS_LOGGED_IN);
      return loggedIn ? JSON.parse(loggedIn) : false;
    } catch (error) {
      console.error('Error checking logged in status:', error);
      return false;
    }
  },

  async clearAuthData(): Promise<void> {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.USER,
        STORAGE_KEYS.TOKEN,
        STORAGE_KEYS.IS_LOGGED_IN,
      ]);
    } catch (error) {
      console.error('Error clearing auth data:', error);
    }
  },
};
