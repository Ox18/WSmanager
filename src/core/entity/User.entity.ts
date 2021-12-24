class User{
    constructor(
        public id: string,
        public name: string,
        public username: string,
        public password: string,
        public licence_active: boolean,
        public account_active: boolean,
        public rol: string
    ){}
}

export default User;