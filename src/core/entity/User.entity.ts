class User{
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public password: string,
        public licence_active: boolean,
        public account_active: boolean
    ){}
}