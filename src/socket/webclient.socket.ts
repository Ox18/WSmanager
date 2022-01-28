import { TClientSocket } from "../types/socket.types";
import ClientSocket from "./client.socket";

class WebClientSocket extends ClientSocket<TClientSocket> {
    constructor() {
        super();
    }

    public findByUserId(userID) {
        let client_data = null;

        this.clients.forEach((client) => {
            if (client.user.id === userID) {
                client_data = client;
            }
        });
        return client_data;
    }

    public findAllUsers() {
        const clients = [];

        this.clients.forEach((client) => {
            clients.push(client.user);
        });
        return clients;
    }
}

export default WebClientSocket;
