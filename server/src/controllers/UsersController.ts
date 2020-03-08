import {
  Controller,
  Get,
  Inject,
  Post,
  BodyParams,
  Put,
  Delete,
  PathParams
} from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import User from "models/User";
// import { User } from "type";

@Controller("/users")
class UsersController {
  constructor(@Inject(User) private user: MongooseModel<User>) {}

  @Get()
  async fetch() {
    return await this.user.find();
  }

  @Post()
  async createUser(@BodyParams() params: User) {
    try {
      const {
        firstname,
        lastname,
        address,
        mobile,
        category,
        remarks
      } = params;
      if (
        !firstname &&
        !lastname &&
        !address &&
        !mobile &&
        !category &&
        !remarks
      )
        throw "Fields are Empty";

      // if ((await this.user.countDocuments({ name })) !== 0)
      //   throw "Name is not unique";

      const newUser = new this.user({
        firstname,
        lastname,
        address,
        mobile,
        category,
        remarks
      });
      await newUser.save();
    } catch (error) {
      return { error };
    }
    return { success: "Successfully created!" };
  }

  @Put()
  async editUser(@BodyParams() params: User) {
    try {
      const {
        _id,
        firstname,
        lastname,
        address,
        mobile,
        category,
        remarks
      } = params;
      if (
        !firstname &&
        !lastname &&
        !address &&
        !mobile &&
        !category &&
        !remarks
      )
        throw "Fields are Empty";

      const user = await this.user.findByIdAndUpdate(_id, {
        firstname,
        lastname,
        address,
        mobile,
        category,
        remarks
      });
      if (!user) throw "Error editing user";
    } catch (error) {
      return { error };
    }
    return { success: "Successfully Edited!" };
  }

  @Delete("/:_id")
  async deleteUser(@PathParams() { _id }: User) {
    try {
      await this.user.findByIdAndDelete(_id);
    } catch (error) {
      return { error };
    }
    return { success: "Deleted!" };
  }
}

export default UsersController;
