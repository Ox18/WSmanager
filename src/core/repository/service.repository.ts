interface IServiceRepository<T> {
    findAll(): Promise<T[]>;
    find(id: string): Promise<T>;
    create(data: T): Promise<void>;
    update(id: string, data: T): Promise<void>;
    delete(id: string): Promise<void>;
    deleteAll(): Promise<void>;
}

export default IServiceRepository;
