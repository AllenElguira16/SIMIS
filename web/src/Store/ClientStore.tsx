import React from "react";
import Axios from "axios";
import {action, observable} from "mobx";

class ClientStore {
  @observable
  public clientList: Partial<ClientForm[]> = [];

  /**
   * Get list of clients
   * @param id
   */
  @action.bound
  public getClient = async (id: string) => {
    const {data} = await Axios.get(`/users/${id}`);
    return data;
  };

  /**
   * Get list of clients
   */
  @action.bound
  public getClientList = async () => {
    const {data} = await Axios.get(`/users`);
    this.clientList = data;
  };

  @action.bound
  public searchClient = async (searchValue: string) => {
    if (searchValue.length === 0) {
      this.getClientList();
      return;
    }
    const {data} = await Axios.get(`/users?search=${searchValue}`);
    this.clientList = data;
  };

  /**
   * Edit Clients
   * @param clientForm
   */
  @action.bound
  public editClient = async (clientForm: ClientForm | undefined) => {
    const {data} = await Axios.put("/users", clientForm);
    if (data.error) {
      return alert(data.error);
    }

    alert(data.success);
  };

  /**
   * Edit Clients
   * @param id
   */
  @action.bound
  public deleteClient = async (id: ClientForm["id"]) => {
    const {data} = await Axios.delete(`/users/${id}`);
    if (data.error) {
      return alert(data.error);
    }

    await this.getClientList();
    alert(data.success);
  };
}

export default React.createContext(new ClientStore());
