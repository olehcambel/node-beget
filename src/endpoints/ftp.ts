import { BegetRequest } from '../beget-request';
import { Methods } from '../types/controller.interface';
import { Account, AddAccount } from '../types/ftp.interface';

export class FtpEndpoint {
    constructor(private readonly client: BegetRequest) {}

    /**
     * @private
     */
    private method<T>(method: Methods['ftp'], data?: object): Promise<T> {
        return this.client.api('ftp', method, data);
    }

    /**
     * Method returns list of additional FTP accounts with their home directories.
     */
    getList(): Promise<Account[]> {
        return this.method('getList');
    }

    /**
     * Method adds new FTP account.
     * @returns Returns property of successful or unsuccessful execution.
     */
    add(params: AddAccount): Promise<boolean> {
        return this.method('add', params);
    }

    /**
     * Method performs password change for additional FTP account.
     * @returns Returns property of successful or unsuccessful execution.
     */
    changePassword(params: Pick<Account, 'suffix' | 'password'>): Promise<boolean> {
        return this.method('changePassword', params);
    }

    /**
     * Method deletes additional FTP account with given suffix.
     * @returns Returns property of successful or unsuccessful execution.
     */
    delete(params: Pick<Account, 'suffix'>): Promise<boolean> {
        return this.method('delete', params);
    }
}
