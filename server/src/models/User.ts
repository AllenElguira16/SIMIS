import { Model, ObjectID } from "@tsed/mongoose";
import { Property, Default } from "@tsed/common";

@Model()
class User {
  @ObjectID("id")
  public _id!: string;

  @Property()
  public firstname!: string;

  @Property()
  public lastname!: string;

  @Property()
  public address!: string;

  @Property()
  public mobile!: string;

  @Property()
  public category!: string;

  @Property()
  public remarks!: string;

  @Property()
  @Default(Date.now())
  public dateCreated: Date = new Date();
}

export default User;
