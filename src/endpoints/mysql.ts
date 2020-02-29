import { BegetRequest } from '../beget-request';
import { Methods } from '../types/controller.interface';
import { DB, DBConf } from '../types/mysql.interface';

export class MysqlEndpoint {
    constructor(private readonly client: BegetRequest) {}

    /**
     * @private
     */
    private method<T>(method: Methods['mysql'], data?: object): Promise<T> {
        return this.client.api('mysql', method, data);
    }

    /**
     * The method returns a list of MySQL databases with their accesses.
     */
    getList(): Promise<DB[]> {
        return this.method('getList');
    }

    /**
     * The method adds the task to the queue for creating a new MySql database with
     * the specified suffix and creates access for localhost with the specified password.
     * The database creation process can take several minutes.
     * @returns Returns property of successful or unsuccessful execution.
     */
    addDb(params: Pick<DBConf, 'suffix' | 'password'>): Promise<boolean> {
        return this.method('addDb', params);
    }

    /**
     * The method adds the specified access to the specified MySql database.
     * @returns Returns property of successful or unsuccessful execution.
     */
    addAccess(params: DBConf): Promise<boolean> {
        return this.method('addAccess', params);
    }

    /**
     * The method deletes the specified database and all accesses to it.
     * @returns Returns property of successful or unsuccessful execution.
     */
    dropDb(params: Pick<DBConf, 'suffix'>): Promise<boolean> {
        return this.method('dropDb', params);
    }

    /**
     * The method removes the specified access from the database.
     * @returns Returns property of successful or unsuccessful execution.
     */
    dropAccess(params: Pick<DBConf, 'suffix' | 'access'>): Promise<boolean> {
        return this.method('dropAccess', params);
    }

    /**
     * The method changes the password on the specified access.
     * @returns Returns property of successful or unsuccessful execution.
     */
    changeAccessPassword(params: DBConf): Promise<boolean> {
        return this.method('changeAccessPassword', params);
    }
}
