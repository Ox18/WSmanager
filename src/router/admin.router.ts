import { Router } from "express";
import { ROUTE_CONST } from "../consts/route.const";
import adminController from "../controller/admin.controller";
import adminMidleware from "../middleware/admin.middleware";

class AdminRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.router.use(adminMidleware);
        this.routes();
    }

    private routes() {
        this.router.get(ROUTE_CONST.ADMIN, adminController.getIndex);
    }
}

export default new AdminRouter().router;
