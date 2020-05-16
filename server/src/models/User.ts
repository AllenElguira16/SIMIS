import {Model, ObjectID} from "@tsed/mongoose";
import {MinLength as Minimum, Property, Required} from "@tsed/common";

@Model()
export class Users implements ClientForm {
  @ObjectID("id")
  public _id: string;

  @Property()
  public fullName: string;

  @Property()
  public address: string;

  @Property()
  public date: number;

  @Property()
  public policyID: string;

  @Property()
  public dynamicForm: DynamicForm[];

  @Property()
  public DS: string;

  @Property()
  public VAT: string;

  @Property()
  public LGT: string;

  @Property()
  public OTHERS: string;

  @Property()
  public MODEL: string;

  @Property()
  public PLATENO: string;

  @Property()
  public YEARMODEL: string;

  @Property()
  public MOTORNO: string;

  @Property()
  public CHASISNO: string;
}
