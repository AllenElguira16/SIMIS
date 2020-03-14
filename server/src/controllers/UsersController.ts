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
  async fetchAll() {
    return await this.user.find();
  }

  @Get("/:id")
  async fetchOne(@PathParams() { id }: { id: string }) {
    return await this.user.findById(id);
  }

  @Post()
  async createUser(@BodyParams() params: User) {
    try {
      console.log(params);
      if (
        !params.name.length ||
        !params.address.length ||
        !params.date ||
        !params.policyID.length ||
        !params.dynamicForm.length ||
        !params.DS.length ||
        !params.VAT.length ||
        !params.LGT.length ||
        !params.OTHERS.length ||
        !params.MODEL.length ||
        !params.YEARMODEL.length ||
        !params.PLATENO.length ||
        !params.MOTORNO.length ||
        !params.CHASISNO.length
      )
        throw "Fields are Empty";

      // if ((await this.user.countDocuments({ name })) !== 0)
      //   throw "Name is not unique";

      const newUser = new this.user(params);
      await newUser.save();
      return { success: "Successfully created!" };
    } catch (error) {
      return { error };
    }
  }

  // @Put()
  // async editUser(@BodyParams() params: User) {
  //   try {
  //     const {
  //       _id,
  //       firstname,
  //       lastname,
  //       address,
  //       mobile,
  //       category,
  //       remarks
  //     } = params;
  //     if (
  //       !firstname &&
  //       !lastname &&
  //       !address &&
  //       !mobile &&
  //       !category &&
  //       !remarks
  //     )
  //       throw "Fields are Empty";

  //     const user = await this.user.findByIdAndUpdate(_id, {
  //       firstname,
  //       lastname,
  //       address,
  //       mobile,
  //       category,
  //       remarks
  //     });
  //     if (!user) throw "Error editing user";
  //   } catch (error) {
  //     return { error };
  //   }
  //   return { success: "Successfully Edited!" };
  // }

  // @Delete("/:_id")
  // async deleteUser(@PathParams() { _id }: User) {
  //   try {
  //     await this.user.findByIdAndDelete(_id);
  //   } catch (error) {
  //     return { error };
  //   }
  //   return { success: "Deleted!" };
  // }
}

export default UsersController;
