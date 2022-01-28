import firebase from "firebase/compat/app";
import db from "../db/connection";
import IServiceRepository from "../repository/service.repository";

class Service<T> implements IServiceRepository<T> {
    public connection: firebase.firestore.Firestore;

    constructor(public table: string) {
        this.connection = db;
    }

    public async findAll(): Promise<T[]> {
        const snapshot = await this.connection.collection(this.table).get();
        return snapshot.docs.map((doc) => doc.data() as T);
    }

    public async find(id: string): Promise<T> {
        const snapshot = await this.connection.collection(this.table).doc(id).get();
        const data = snapshot.data() as T;
        return data;
    }

    public async create(data: T): Promise<void> {
        const response = await this.connection.collection(this.table).add(data);
        await this.connection.collection(this.table).doc(response.id).update({id: response.id});
    }

    public async update(id: string, data: T): Promise<void> {
        await this.connection.collection(this.table).doc(id).update(data);
    }

    public async delete(id: string): Promise<void> {
        await this.connection.collection(this.table).doc(id).delete();
    }

    public async deleteAll(): Promise<void> {
        await this.connection.collection(this.table).get().then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                doc.ref.delete();
            });
        });
    }
}

export default Service;
