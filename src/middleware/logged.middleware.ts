function loggedMidleware(req: any, res: any, next: any): void {
    if(req.session.user) next();
    else res.redirect("/login");
  }
    
    export default loggedMidleware;