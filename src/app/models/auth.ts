import { makeAutoObservable } from "mobx";
import Store from "../store";

export interface IAuth {
  isAuth: boolean;
  access: string;
}

export default class Auth implements IAuth {

  isAuth = false;
  access = '';

  constructor(private store: Store) {
    makeAutoObservable(this);
  }

  setAuth() {
    this.isAuth = true;
  }

  setAccess(token: string) {
    this.access = token;
  }

  logout() {
    this.isAuth = false;
    this.access = '';
  }
}