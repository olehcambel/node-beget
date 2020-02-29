import { BegetRequest } from '../beget-request';
import { Methods } from '../types/controller.interface';
import { AccountInfo, SshSettings } from '../types/user.interface';

export class UserEndpoint {
    constructor(private readonly client: BegetRequest) {}

    /**
     * @private
     */
    private method<T>(method: Methods['user'], data?: object): Promise<T> {
        return this.client.api<'user', T>('user', method, data);
    }

    /**
     * Method returns information on the user's tariff plan,
     * on some parameters of the server, where the user is
     * currently located and on the applied limits thereof.
     */
    getAccountInfo(): Promise<AccountInfo> {
        return this.method('getAccountInfo');
    }

    /**
     * If there is no additional ftplogin parameter for the main account,
     * the method enables and disables SSH for ftp account with ftplogin.
     */
    toggleSsh(params: SshSettings): Promise<void> {
        return this.method('toggleSsh', params);
    }
}
