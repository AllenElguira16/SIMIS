import {BodyParams, Controller, Delete, Get, Inject, PathParams, Post, Put} from "@tsed/common";
import {Employee} from "../models/Employee";
import {MongooseModel} from "@tsed/mongoose";

@Controller("/employees")
class EmployeesController {
  constructor(@Inject(Employee) private employee: MongooseModel<Employee>) {}

  @Post("/login")
  public async doLogin(@BodyParams() params: EmployeeForm) {
    try {
      const employee = await this.employee.findOne({username: params.username}).exec();
      return employee?.password === params.password;
    } catch (error) {
      return {error};
    }
  }

  @Get()
  async getEmployees() {
    return this.employee.find();
  }

  @Post()
  async addEmployee(@BodyParams() params: EmployeeForm) {
    try {
      if (params.username.length === 0 || params.password.length === 0) {
        throw "Empty inputs";
      }

      if (await this.employee.exists({username: params.username})) {
        throw "Employee ID exists!";
      }

      const newEmployee = new this.employee(params);
      if (!(await newEmployee.save())) throw "Error Creating Employee";
      return {success: "Employee Created!"};
    } catch (error) {
      return {error};
    }
  }

  @Put()
  async editEmployee(@BodyParams() {id, ...params}: EmployeeForm) {
    // return ;
    try {
      const findUser = await this.employee.find({username: params.username, _id: {$ne: id}}).exec();
      if (params.username.length === 0 || params.password.length === 0) {
        throw "Empty inputs";
      }

      if (findUser.length !== 0) {
        throw "Employee ID exists!";
      }

      const employee = await this.employee.findByIdAndUpdate(id, params);
      if (!employee) throw "Error Updating Employee";
      return {success: "Employee Updated!"};
    } catch (error) {
      return {error};
    }
  }

  @Delete("/:id")
  async deleteEmployee(@PathParams() {id}: EmployeeForm) {
    try {
      const employee = await this.employee.findByIdAndDelete(id);
      if (!employee) throw "Error Deleting Employee";
      return {success: "Employee Deleted!"};
    } catch (error) {
      return {error};
    }
  }
}

export default EmployeesController;
