import { Server, Socket } from "socket.io"; 

class HandlerSocket{
    constructor(io: Server){
        io.on("connection", (socket: Socket) => {
            socket.on("CLIENT_WEB_OPCODE", (data: any) => {
                console.log(data);
            });
        });
    }
}

export default HandlerSocket;