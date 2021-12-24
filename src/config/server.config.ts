import { Application } from "express";
import http, { Server } from "http";

function initServer(app: Application){
    const server: Server = http.createServer(app);

    server.listen(3000, ()=>{
        console.log("Server is running on port 3000");
    })

    return server;
}

export default initServer;