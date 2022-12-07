import { makeAutoObservable } from 'mobx';
import Store from '../store';

export interface ILocalStorage {
  setToken: (token: string) => void;
  deleteToken: () => void;
  token: string | null;
}

interface IUser {
  token: string | null;
}

export default class LocalStorage implements ILocalStorage {
  private user: IUser;
  private store: Store;

  constructor(store: Store) {
    makeAutoObservable(this);
    this.store = store;
    this.user = JSON.parse(localStorage.getItem('user') as string) || {
      token: null,
    };
  }

  get token() {
    return this.user.token;
  }

  public setToken(token: string) {
    this.user.token = token;
    localStorage.setItem('user', JSON.stringify(this.user));
    this.store.auth.setAuth();
  }

  public deleteToken() {
    this.user.token = null;
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
