import { makeAutoObservable } from 'mobx';
import Store from '../store';

export interface IAuth {
  store: Store;
  isAuth: boolean;
  access: string;
  setAuth: () => void;
  logout: () => void;
}

export default class Auth implements IAuth {
  isAuth = false;
  access = '';
  store: Store;

  constructor(store: Store) {
    this.store = store;
    makeAutoObservable(this);
  }

  setAuth() {
    this.isAuth = true;
  }

  logout() {
    this.store.localStorage.deleteToken();
    this.isAuth = false;
  }
}
