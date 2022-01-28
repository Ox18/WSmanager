import { ROUTE_CONST } from "../consts/route.const";

function loggedMidleware(req: any, res: any, next: any): void {
    if (req.session.user) { next(); } else { res.redirect(ROUTE_CONST.LOGIN); }
  }

export default loggedMidleware;
