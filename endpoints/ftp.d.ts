import { BegetRequest } from '../beget-request';
import { Account, AddAccount } from '../types/ftp.interface';
export declare class FtpEndpoint {
    private readonly client;
    constructor(client: BegetRequest);
    /**
     * @private
     */
    private method;
    /**
     * Method returns list of additional FTP accounts with their home directories.
     */
    getList(): Promise<Account[]>;
    /**
     * Method adds new FTP account.
     * @returns Returns property of successful or unsuccessful execution.
     */
    add(params: AddAccount): Promise<boolean>;
    /**
     * Method performs password change for additional FTP account.
     * @returns Returns property of successful or unsuccessful execution.
     */
    changePassword(params: Pick<Account, 'suffix' | 'password'>): Promise<boolean>;
    /**
     * Method deletes additional FTP account with given suffix.
     * @returns Returns property of successful or unsuccessful execution.
     */
    delete(params: Pick<Account, 'suffix'>): Promise<boolean>;
}
