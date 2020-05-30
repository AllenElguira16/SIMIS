import React from "react";
// import Axios from "axios";
import {action, observable} from "mobx";
import Axios, {AxiosResponse} from "axios";

class EmployeeStore {
  @observable
  public employees: Employee[] = [];

  @observable
  public isAuth = false;

  @action.bound
  public doLogin = async (input: Employee) => {
    const {data} = await Axios.post('/employees/login', input);
    this.isAuth = data;
  };

  @action.bound
  public getEmployees = async () => {
    const {data} = await Axios.get('/employees');
    this.employees = data;
  };

  @action.bound
  public addEmployee = async (formInput: Partial<Employee> | undefined): Promise<ServerResponse> => {
    const {data}: AxiosResponse<ServerResponse> = await Axios.post('/employees', formInput);
    return data;
  };

  @action.bound
  public editEmployee = async (formInput: Partial<Employee> | undefined): Promise<ServerResponse> => {
    const {data}: AxiosResponse<ServerResponse> = await Axios.put('/employees', formInput);
    return data;
  };

  @action.bound
  public deleteEmployee = async (id: Employee['id']): Promise<ServerResponse> => {
    const {data}: AxiosResponse<ServerResponse> = await Axios.delete(`/employees/${id}`);
    return data;
  };
}

export default React.createContext(new EmployeeStore());