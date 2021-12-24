import cookieparser from "cookie-parser";
import express, {
  Application,
  json,
  Request,
  Response,
  urlencoded,
} from "express";
import path from "path";

import exphbs from "express-handlebars";
import sessions from "express-session";
import helmet from "helmet";
import { Server } from "http";

import { DAY } from "../consts/other.const";
import publicRouter from "../router/public.router";
import privateRouter from "../router/private.router";

import handlebarsConfig from "./handlebars.config";

function initExpress(): Server {
  const app: Application = express();

  app.set("env", "production");

  // Set Template engine to handlebars
  app.engine(
    "hbs",
    exphbs({
      extname: "hbs",
      defaultLayout: "main",
      layoutsDir: "views/layouts",
      partialsDir: "views/partials",
      helpers: handlebarsConfig,
    })
  );
  app.set("view engine", "hbs");
  app.set("port", process.env.PORT || 3000);

  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(helmet());
  app.set("trust proxy", 1);

  app.use(
    sessions({
      secret: "websocket",
      saveUninitialized: true,
      cookie: {
        secure: false,
        maxAge: DAY.MILLISECONDS,
      },
      resave: false,
    })
  );
  app.use(cookieparser());

  app.use("/static", express.static(path.join(__dirname, "/../../public")));

  app.use(
    "/favicon.ico",
    express.static(path.join(__dirname, "/../../public/images/favicon.ico"))
  );
  app.use(publicRouter);
  app.use(privateRouter);
  app.use((_req: Request, res: Response) => {
    res.render("404", { layout: false });
  });

  return app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`); // tslint:disable-line
  });
}

export default initExpress;