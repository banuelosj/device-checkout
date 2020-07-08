import { action, observable, decorate } from "mobx";

export class LocationStore {
  name = null; //be default

  setLocation(x) {
    this.name = x;
  }
}

decorate(LocationStore, {
  name: observable,
  setLocation: action.bound,
});
