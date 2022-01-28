import { Server } from "http";
import * as SocketIO from "socket.io";
import HandlerSocket from "../socket/handler.socket";

function initSocket(server: Server) {
    const io = new SocketIO.Server(server);
    new HandlerSocket(io);
}

export default initSocket;
