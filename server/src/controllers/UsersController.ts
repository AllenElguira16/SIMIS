import {BodyParams, Controller, Delete, Get, Inject, PathParams, Post, Put, QueryParams, Required, Status} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Users} from "../models/User";
import {response} from "express";

@Controller("/users")
export class UsersController {
  @Inject(Users) public user: MongooseModel<Users>;

  @Get()
  async fetchAll(@QueryParams() {search}: {search: string}) {
    if (search) {
      return this.user.find({
        policyID: {
          $regex: search,
          $options: "i",
        },
      });
    }
    return this.user.where("status", 1).find();
  }

  @Get("/:id")
  async fetchOne(@PathParams() {id}: {id: string}) {
    return this.user.findById(id);
  }

  @Post()
  @Status(201)
  async createUser(@BodyParams() @Required() params: ClientForm) {
    try {
      UsersController.validateInputs(params);
      const newUser = new this.user(params);
      await newUser.save();
      return {success: "Successfully created!"};
    } catch (error) {
      return {error};
    }
  }

  @Put()
  async editClient(@BodyParams() @Required() {id, ...params}: ClientForm) {
    try {
      UsersController.validateInputs(params);
      const user = await this.user.findByIdAndUpdate(id, params, {new: true});
      if (!user) throw "Error editing user";
      return {success: "Successfully edited!"};
    } catch (error) {
      return {error};
    }
  }

  @Delete("/:id")
  async deleteClient(@PathParams() {id}: ClientForm) {
    try {
      const response = await this.user.findByIdAndUpdate(id, {
        status: 0,
      });
      // const response = await this.user.findByIdAndDelete(id);
      if (!response) throw "Error Deleting User";
      return {success: "Successfully Deleted!"};
    } catch (error) {
      return {error};
    }
  }

  private static validateInputs(params: ClientForm) {
    if (
      !params.fullName.length ||
      !params.address.length ||
      !params.date ||
      !params.policyID.length ||
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
  }
}
