import Errors, { IErrors } from '../models/errors';
import Auth, { IAuth } from '../models/auth';
import User, { IUser } from '../models/user';
import LocalStorage, { ILocalStorage } from '../models/localStorage';

export interface IStore {
  auth: IAuth;
  errors: IErrors;
  user: IUser;
  localStorage: ILocalStorage;
}

export default class Store implements IStore {
  auth = new Auth(this);
  localStorage = new LocalStorage(this);
  errors = new Errors();
  user = new User();
}
