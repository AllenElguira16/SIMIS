import { Model, ObjectID } from "@tsed/mongoose";
import { Property, Default } from "@tsed/common";

@Model()
class Category {
  @ObjectID("id")
  public _id!: string;

  @Property()
  public name!: string;

  @Property()
  @Default(false)
  public isValid: boolean = false;

  @Property()
  @Default(Date.now())
  public dateCreated: Date = new Date();
}

export default Category;
