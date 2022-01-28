import initLoadEnv from "./config/env.config";
import initExpress from "./config/express.config";
import initServer from "./config/server.config";
import initSocket from "./config/socket.config";

// Load Env File
initLoadEnv();

initSocket(initServer(initExpress()));
