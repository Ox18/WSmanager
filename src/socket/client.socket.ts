class ClientSocket<T> {
    public clients: Map<string, T>;

    constructor() {
        this.clients = new Map();
    }

    public create(id: string, data: T) {
        this.clients.set(id, data);
    }

    public find(id: string) {
        return this.clients.get(id);
    }

    public remove(id: string) {
        this.clients.delete(id);
    }
}

export default ClientSocket;
