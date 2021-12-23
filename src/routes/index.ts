import { Router } from "express";
import isLoggedIn from "../config/auth.config";


const routes = Router();

routes.get("/", (_req, res) => {
    res.json({
        message: "Welcome to the API"
    });
});


routes.use(isLoggedIn);

// routes.use("/login", loginRoute);

// routes.use("/user", userRoute);

export default routes;