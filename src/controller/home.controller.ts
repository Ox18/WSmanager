import Controller from "./controller";

class HomeController extends Controller{
    constructor(){
        super();
    }

    getIndex(_req: any, res: any){
        res.render("home", {
            title: "Home",
            layout: false
        });
    }
}

export default new HomeController();