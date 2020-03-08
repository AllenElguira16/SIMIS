import { createContext, ChangeEvent } from "react";
import { observable, action } from "mobx";
import Axios from "axios";

type FormProps = Partial<User>;

class State {
  /**
   * Form Input
   */
  @observable
  public form: FormProps = {
    firstname: "",
    lastname: "",
    address: "",
    mobile: "",
    category: "",
    remarks: ""
  };

  /**
   * List of Categories
   */
  @observable
  public users: User[] = [];

  @action.bound
  populateForm(user: User) {
    this.form = user;
  }

  /**
   * Handles form input changes
   */
  @action.bound
  onChange = (key: keyof FormProps) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    this.form = {
      ...this.form,
      [key]: event.target.value
    };
  };

  /**
   * Fetch users from backend
   */
  @action.bound
  async fetchUsers() {
    const { data } = await Axios.get("/users");
    this.users = data;
  }

  /**
   * Send details to backend to create new Users
   * @param event Event from Form Element
   */
  @action.bound
  async addUsers(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const res = await Axios.post("/users", this.form);
    this.fetchUsers();
    console.log(res);
  }

  /**
   * Send details to backend to create new Category
   * @param event Event from Form Element
   */
  @action.bound
  async editUsers(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const res = await Axios.put("/users", this.form);
    this.fetchUsers();
    console.log(res);
  }

  /**
   *
   */
  @action.bound
  async deleteCategory(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const res = await Axios.delete(`/users/${this.form.id}`);
    this.fetchUsers();
    console.log(res);
  }
}

export default createContext(new State());
