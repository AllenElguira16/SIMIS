import { createContext, ChangeEvent } from "react";
import { observable, action } from "mobx";
import Axios from "axios";

type FormProps = Partial<Category>;

class State {
  /**
   * Form Input
   */
  @observable
  public form: FormProps = {
    name: ""
  };

  /**
   * List of Categories
   */
  @observable
  public categories: Category[] = [];

  @action.bound
  populateForm(category: Category) {
    this.form = category;
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
      [key]: event.currentTarget.value
    };
  };

  /**
   * Fetch categories from backend
   */
  @action.bound
  async fetchCategories() {
    const { data } = await Axios.get("/categories");
    this.categories = data;
  }

  /**
   * Send details to backend to create new Category
   * @param event Event from Form Element
   */
  @action.bound
  async addCategory(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const res = await Axios.post("/categories", this.form);
    this.fetchCategories();
    console.log(res);
  }

  /**
   * Send details to backend to create new Category
   * @param event Event from Form Element
   */
  @action.bound
  async editCategory(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const res = await Axios.put("/categories", this.form);
    this.fetchCategories();
    console.log(res);
  }

  /**
   *
   */
  @action.bound
  async deleteCategory(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const res = await Axios.delete(`/categories/${this.form.id}`);
    this.fetchCategories();
    console.log(res);
  }
}

export default createContext(new State());
