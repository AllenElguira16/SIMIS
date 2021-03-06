import {Model, ObjectID} from "@tsed/mongoose";
import {Property} from "@tsed/common";

@Model()
export class Employee {
  @ObjectID("id")
  public _id: string;

  @Property()
  public username: string;

  @Property()
  public password: string;
}
