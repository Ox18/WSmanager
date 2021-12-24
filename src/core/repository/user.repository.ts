interface IUserRepository<T> {
    findByUsernameAndPassword(username: string, password: string): Promise<T>;
}

export default IUserRepository;