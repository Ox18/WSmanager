import { ROL } from "../consts/rol.const";
import Controller from "./controller";

class HomeController extends Controller {
    constructor() {
        super();
    }

    public getIndex(req: any, res: any) {
        res.render("home", {
            title: "Home",
            layout: false,
            user: {
                ...req.session.user,
                isAdmin: req.session.user.rol === ROL.ADMIN
            }
        });
    }
}

export default new HomeController();
