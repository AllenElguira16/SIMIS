import {GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings} from "@tsed/common";
import * as bodyParser from "body-parser";
import * as compress from "compression";
import * as cookieParser from "cookie-parser";
import * as methodOverride from "method-override";
import * as cors from "cors";
// import "@tsed/ajv";
import "@tsed/mongoose";
import * as mongooseConfig from "./config/mongoose";

const rootDir = __dirname;

@ServerSettings({
  rootDir,
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8000,
  httpsPort: process.env.PORT || 8080, // CHANGE
  mount: {
    "/rest": [`${rootDir}/controllers/**/*.ts`],
  },
  mongoose: mongooseConfig.defaultOptions,
  exclude: ["**/*.spec.ts"],
})
export class Server extends ServerLoader {
  public $beforeRoutesInit(): void | Promise<void> {
    this.use(cors())
      .use(GlobalAcceptMimesMiddleware)
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true,
        })
      );
  }
}
