import { Response } from "express";
import Controller from "./controller";

class MyBarController extends Controller {
    constructor() {
        super();
    }

    public getIndex(req: any, res: Response<any, Record<string, any>>): void {
        res.render("mybar", {
            layout: false,
            title: "My Bar",
            user: req.session.user,
        });
    }
}

export default new MyBarController();
