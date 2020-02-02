import { Controller, Get } from "@tsed/common";

@Controller("/")
class HomeController {
  /**
   * hello
   */
  @Get()
  public hello() {
    return "Hello World";
  }
}

export default HomeController;
