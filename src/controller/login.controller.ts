import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Controller from "./controller";
import UserService from "../core/service/user.service";

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
        const userService= new UserService();

        userService.findByUsernameAndPassword(username, password)
        .then(user => {
            if(user){
                req.session.user = user;
                res.redirect("/");
            }
            else res.render("login", {
                title: "Login",
                layout: false,
                error: "Invalid username or password"
            });
        })
        .catch(error => {
            res.status(500).json({
                message: error.message
            })
        });    
    }
}

export default new LoginController();