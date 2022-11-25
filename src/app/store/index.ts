import Errors, { IErrors } from "../models/errors";
import Auth, { IAuth } from "../models/auth";
import User, { IUser } from "../models/user";


export interface IStore {
  auth:  IAuth;
  errors: IErrors;
  user: IUser;
}


export default class Store implements IStore {
  auth = new Auth(this);
  errors = new Errors(this);
  user = new User()
}