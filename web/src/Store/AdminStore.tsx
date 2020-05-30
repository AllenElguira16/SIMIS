import React from "react";
// import Axios from "axios";
import {action, observable} from "mobx";

class AdminStore {
  @observable
  public isLoggedIn = !false;
  private password = '12345';

  @action.bound
  public doLogIn = (password: string) => {
    this.isLoggedIn = password === this.password;
  };
}

export default React.createContext(new AdminStore());