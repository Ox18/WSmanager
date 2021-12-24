import firebase from "firebase/compat/app";
import db from "../db/connection"

class Repository<T>{
    connection: firebase.firestore.Firestore;

    constructor(public table: string){
        this.connection = db;
    }

    async findAll(): Promise<T[]>{
        const snapshot = await this.connection.collection(this.table).get();
        return snapshot.docs.map(doc => doc.data() as T);
    }

    async find(id: string): Promise<T>{
        const snapshot = await this.connection.collection(this.table).doc(id).get();
        return snapshot.data() as T;
    }

    async create(data: T): Promise<void>{
        await this.connection.collection(this.table).add(data);
    }

    async update(id: string, data: T): Promise<void>{
        await this.connection.collection(this.table).doc(id).update(data);
    }

    async delete(id: string): Promise<void>{
        await this.connection.collection(this.table).doc(id).delete();
    }

    async deleteAll(): Promise<void>{
        await this.connection.collection(this.table).get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                doc.ref.delete();
            });
        });
    }
}