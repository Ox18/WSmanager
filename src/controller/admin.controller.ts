import { ROUTE_CONST } from "../consts/route.const";
import UserService from "../core/service/user.service";
import Controller from "./controller";

const userService = new UserService();

class AdminController extends Controller {
    constructor() {
        super();
    }

    public async getIndex(_req: any, res: any) {
        try {
            const users = await userService.findAll();
            console.log(users);
            res.render("admin", {
                title: "Administrador",
                layout: false,
                users
            });
        } catch (ex) {
            res.redirect(ROUTE_CONST.HOME);
        }
    }
}

export default new AdminController();
