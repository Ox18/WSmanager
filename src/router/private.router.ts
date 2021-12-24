import { Router } from "express";
import { ROUTE_CONST } from "../consts/route.const";
import HomeController from "../controller/home.controller";
import MyBarController from "../controller/mybar.controller";
import loggedMidleware from "../middleware/logged.middleware";

class PrivateRouter{
    public router: Router;

    constructor(){
        this.router = Router();
        this.router.use(loggedMidleware);
        this.routes();
    }

    private routes(){
        this.router.get(ROUTE_CONST.HOME, HomeController.getIndex);
        this.router.post(ROUTE_CONST.HOME, HomeController.postIndex);
        this.router.get(ROUTE_CONST.BAR, MyBarController.getIndex);
        this.router.post(ROUTE_CONST.BAR, MyBarController.postIndex);
    }
}

export default new PrivateRouter().router;