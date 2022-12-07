import { makeAutoObservable } from 'mobx';
export interface IUser {
  username: string;
}

export default class User implements IUser {
  username: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setName(firstname: string, lastname: string) {
    this.username = `${firstname} ${lastname}`;
  }

  get initials() {
    return `${this.username[0].toUpperCase()}${
      this.username[this.username.indexOf(' ') + 1]
    }`;
  }
}
