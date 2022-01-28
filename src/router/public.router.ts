import { Router } from "express";
import { ROUTE_CONST } from "../consts/route.const";
import loginController from "../controller/login.controller";
import logoutController from "../controller/logout.controller";

class PublicRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.get(ROUTE_CONST.LOGOUT, logoutController.getIndex);
        this.router.get(ROUTE_CONST.LOGIN, loginController.getIndex);
        this.router.post(ROUTE_CONST.LOGIN, loginController.postIndex);
    }
}

export default new PublicRouter().router;
