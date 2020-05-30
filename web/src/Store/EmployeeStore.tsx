import React from "react";
// import Axios from "axios";
import {action, observable} from "mobx";

class EmployeeStore {
  @observable
  public employees: Employee[] = [];

  @action.bound
  public getEmployees = () => {
  };

  @action.bound
  public addEmployee = (formInput: Partial<Employee> | undefined): ServerResponse => {
    return {};
  };

  @action.bound
  public editEmployee = (formInput: Partial<Employee> | undefined): ServerResponse => {
    return {};
  };

  @action.bound
  public deleteEmployee = (id: Employee['id']): ServerResponse => {
    return {};
  };
}

export default React.createContext(new EmployeeStore());