import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import User from "../core/entity/User.entity";
import UserService from "../core/service/user.service";
import Controller from "./controller";

class LoginController extends Controller {
    constructor() {
        super();
    }

    public getIndex(_req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void {
        res.render("login", {
            title: "Login",
            layout: false
        });
    }

    public postIndex(req: any, res: any): void {
        const { username = "", password = "" } = req.body;
        const userService = new UserService();

        userService.findByUsernameAndPassword(username, password)
        .then((user: User) => {
            if (user) {
                if (user.account_active) {
                    req.session.user = user;
                    res.redirect("/");
                } else { throw new Error("Account is not active"); }
            } else { throw new Error("Username or password is incorrect"); }

        })
        .catch((error) => {
            res.render("login", {
                title: "Login",
                layout: false,
                error: error.message
            });
        });
    }
}

export default new LoginController();
