import { Server, Socket } from "socket.io";
import { CLIENT_MESSAGE, CLIENT_OPCODE, CLIENT_SOCKET, SERVER_OPCODE } from "../consts/socket.const";
import UserService from "../core/service/user.service";
import { TRANSPORT_DATA } from "../types/socket.types";
import ExtensionClientSocket from "./extensionclient.socket";
import WebClientSocket from "./webclient.socket";

const userService = new UserService();

class HandlerSocket {
    public online: {
        web: WebClientSocket;
        extension: ExtensionClientSocket;
    };

    constructor(io: Server) {
        this.online = {
            web: new WebClientSocket(),
            extension: new ExtensionClientSocket()
        };

        io.on("connection", (socket: Socket) => {
            socket.on(CLIENT_SOCKET.WEB, ({ opcode, data}: TRANSPORT_DATA) => {
                switch (opcode) {

                    case SERVER_OPCODE.WEB.CONNECT:
                        const user = data;
                        userService.findByUsernameAndPassword(user.username, user.password)
                        .then((user) => {
                            if (user) {
                                const client = { socket, user };
                                this.online.web.create(socket.id, client);
                                if (user.licence_active) {
                                    socket.emit(CLIENT_OPCODE.WEB.LOGIN_SUCCESS);
                                    io.emit(CLIENT_OPCODE.WEB.GET_ALL_USERS, this.online.web.findAllUsers());
                                } else {
                                    socket.emit(CLIENT_OPCODE.WEB.ERROR, { message: CLIENT_MESSAGE.LICENCIA_NOT_ACTIVE });
                                }
                                return;
                            }
                            throw new Error(CLIENT_MESSAGE.USER_NOT_FOUND);
                        })
                        .catch((err) => {
                            socket.emit(CLIENT_OPCODE.WEB.ERROR, { message: err.message });
                            socket.emit(CLIENT_OPCODE.WEB.DISCONNECT_ACCOUNT_NOT_FOUND);
                        });
                        break;
                    case SERVER_OPCODE.WEB.GET_ALL_USERS:
                        socket.emit(CLIENT_OPCODE.WEB.GET_ALL_USERS, this.online.web.findAllUsers());
                        break;
                    default:
                        console.log("default");
                        break;
                }
            });

            socket.on("disconnect", () => {
                this.online.web.remove(socket.id);
                this.online.extension.remove(socket.id);
                io.emit(CLIENT_OPCODE.WEB.GET_ALL_USERS, this.online.web.findAllUsers());
            });

        });

    }
}

export default HandlerSocket;
