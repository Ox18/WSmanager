import { ROL } from "../consts/rol.const";

function adminMidleware(req: any, res: any, next: any): void {
    if (req.session.user && req.session.user?.rol === ROL.ADMIN) { next(); } else { res.render("404", { layout: false }); }
}

export default adminMidleware;
