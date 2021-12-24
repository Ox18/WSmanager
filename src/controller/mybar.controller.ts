import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Controller from "./controller";

class MyBarController extends Controller{
    constructor(){
        super();
    }

    public getIndex(_req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void {
        res.render("mybar", {
            layout: false,
            title: "My Bar",
        })
    }
}

export default new MyBarController();