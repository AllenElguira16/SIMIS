import {
  Controller,
  Get,
  Post,
  Inject,
  BodyParams,
  Put,
  Delete,
  PathParams
} from "@tsed/common";
import Category from "models/Category";
import { MongooseModel } from "@tsed/mongoose";

@Controller("/categories")
class CategoriesController {
  constructor(@Inject(Category) private category: MongooseModel<Category>) {}

  @Get()
  async fetch() {
    return await this.category.find();
  }

  @Post()
  async createCategory(@BodyParams() params: Category) {
    try {
      const { name } = params;
      if (!name.length) throw "Fields are Empty";

      if ((await this.category.countDocuments({ name })) !== 0)
        throw "Name is not unique";

      const newCategory = new this.category({ name });
      await newCategory.save();
    } catch (error) {
      return { error };
    }
    return { success: "Successfully created!" };
  }

  @Put()
  async editCategory(@BodyParams() params: Category) {
    try {
      const { _id, name } = params;
      if (!name.length) throw "Fields are Empty";

      const user = await this.category.findByIdAndUpdate(_id, { name });
      if (!user) throw "Error editing category";
    } catch (error) {
      return { error };
    }
    return { success: "Successfully Edited!" };
  }

  @Delete("/:_id")
  async deleteCategory(@PathParams() { _id }: Category) {
    try {
      await this.category.findByIdAndDelete(_id);
    } catch (error) {
      return { error };
    }
    return { success: "Deleted!" };
  }
}

export default CategoriesController;
