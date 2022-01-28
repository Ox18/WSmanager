import Controller from "./controller";

class LogoutController extends Controller {
    constructor() {
        super();
    }

    public getIndex(req: any, res: any): void {
        if (req.session.user) {
            req.session.destroy();
            res.redirect("/login");
            return;
        }
        res.redirect("/login");
    }
}

export default new LogoutController();
