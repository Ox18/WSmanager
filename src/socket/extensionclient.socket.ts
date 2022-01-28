import { TClientSocket } from "../types/socket.types";
import ClientSocket from "./client.socket";

class ExtensionClientSocket extends ClientSocket<TClientSocket> {
    constructor() {
        super();
    }
}

export default ExtensionClientSocket;
