import { makeAutoObservable } from "mobx";
import Store from "../store";

export interface IError {
  id: number;
  description: string;
}

export interface IErrors {
  list: IError[]
  addError: (error: IError) => void;
}


export default class Errors implements IErrors {

  list: IError[] = [];

  constructor(store: Store) {
    makeAutoObservable(this);
  }


  addError(error: IError) {
    this.list.push(error);
  }

  removeErrorById(id: number) {
    this.list = this.list.filter(error => error.id !== id);
  }
}