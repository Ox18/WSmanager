import Service from "./service";
import User from "../entity/User.entity";
import IUserRepostiory from "../repository/user.repository";
class UserService extends Service<User> implements IUserRepostiory<User> {
    constructor() {
        super("users");
    }

    async findByUsernameAndPassword(username: string, password: string): Promise<User> {
        return new Promise((resolve, reject) => {
            const accounts:User[] = [];
            this.connection.collection(this.table).get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                    const data = doc.data() as User;
                    accounts.push(data);
                });
                resolve(accounts.find(account => account.username === username && account.password === password));
            })
            .catch(error => {
                reject(error);
            });
        });
    }
}

export default UserService;