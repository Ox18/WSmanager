import { Socket } from "socket.io";
import User from "../core/entity/User.entity";

export interface TRANSPORT_DATA {
    opcode: string;
    data: any;
}

export interface TClientSocket {
    socket: Socket;
    user: User;
}
