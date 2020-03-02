import { BegetRequest } from '../beget-request';
import { AccountInfo, SshSettings } from '../types/user.interface';
export declare class UserEndpoint {
    private readonly client;
    constructor(client: BegetRequest);
    /**
     * @private
     */
    private method;
    /**
     * Method returns information on the user's tariff plan,
     * on some parameters of the server, where the user is
     * currently located and on the applied limits thereof.
     */
    getAccountInfo(): Promise<AccountInfo>;
    /**
     * If there is no additional ftplogin parameter for the main account,
     * the method enables and disables SSH for ftp account with ftplogin.
     */
    toggleSsh(params: SshSettings): Promise<void>;
}
