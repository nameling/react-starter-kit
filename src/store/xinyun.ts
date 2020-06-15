import { observable, action, runInAction } from "mobx";
// import { message as AntMessage } from 'antd';
import { keyOrMenu } from "@/services/xinyun";

class XinyunStore {
  @observable.ref
  merchantsList = [];

  @observable.ref menu = [{ init: true }];

  @observable
  keys = [];

  @observable
  info = {};

  @observable
  logo = "";

  @observable
  message = [];

  @observable
  aptitudeStatus = 0;

  @observable
  merchantName = "";

  @observable
  count = -1;

  @observable
  displayInfo = {};

  @observable.ref
  industries = [];

  @action
  getKeyOrMenu = async (pid = 1122, storeId = 1254) => {
    await keyOrMenu(pid, storeId);

    runInAction(() => {
      // this.menu = Object.values(menus || {}).filter(p => p.isShow);
      // this.keys = (keys || '').split(';');
      // this.aptitudeStatus = aptitudeStatus;
    });
  };
}

const store = new XinyunStore();
export default store;
