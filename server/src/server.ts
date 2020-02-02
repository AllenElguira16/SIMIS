import {
  ServerLoader,
  ServerSettings,
  GlobalAcceptMimesMiddleware
} from "@tsed/common";
import "@tsed/mongoose";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import session from "express-session";
import connectMongo from "connect-mongo";
import mongoose from "mongoose";
const mongoInstance = connectMongo(session);

@ServerSettings({
  rootDir: __dirname,
  acceptMimes: ["accept/json"],
  httpPort: process.env.PORT || 8000,
  httpsPort: process.env.PORT || 8080,
  socketIO: {
    origins: "*"
  },
  mount: {
    "/": "${rootDir}/controllers/**/*.ts"
  },
  mongoose: {
    url:
      "mongodb+srv://user:user@clustersofstars-renyu.mongodb.net/SIMIS?retryWrites=true&w=majority",
    connectionOptions: {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  }
})
export class Server extends ServerLoader {
  public $beforeRoutesInit(): void | Promise<void> {
    this.set("trust proxy", 1);
    this.set("json spaces", 2);
    this.use(GlobalAcceptMimesMiddleware)
      .use(express.urlencoded({ extended: true }))
      .use(express.json())
      .use(helmet())
      .use(cors())
      .use(
        session({
          secret: "the-greatest-secret-key",
          resave: false,
          saveUninitialized: true,
          store: new mongoInstance({
            mongooseConnection: mongoose.connection
          }),
          cookie: {
            // sameSite: true,
            secure: "auto"
          }
        })
      );
  }
}
