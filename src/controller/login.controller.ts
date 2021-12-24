import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Controller from "./controller";

class LoginController extends Controller{
    constructor(){
        super();
    }

    getIndex(_req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void {
        res.render("login", {
            title: "Login",
            layout: false
        });    
    }

    postIndex(req: any, res: any): void {
        const { username = "", password = "" } = req.body;
        if(username === "admin" && password === "admin"){
            req.session.user = {
                username: username,
                password: password,
                name: "Admin"
            };
            res.redirect("/");
            return;
        }
        res.redirect("/login");
    }
}

export default new LoginController();