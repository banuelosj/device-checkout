import { action, observable, decorate } from "mobx";

export class DevicesStore {
  device_type = null;

  setDeviceType(x) {
    this.device_type = x;
  }
}

decorate(DevicesStore, {
  device_type: observable,
  setDeviceType: action.bound,
});
