import { BegetRequest } from '../beget-request';
import { Methods } from '../types/controller.interface';

export class UserEndpoint {
    constructor(private readonly client: BegetRequest) {}

    private method<T>(Method: Methods['user'], data?: object): Promise<T> {
        return this.client.api<'user', T>('user', Method, data);
    }

    /**
     * Method returns information on the user's tariff plan,
     * on some parameters of the server, where the user is
     * currently located and on the applied limits thereof.
     */
    getAccountInfo(): Promise<void> {
        return this.method('getAccountInfo');
    }

    /**
     * If there is no additional ftplogin parameter for the main account,
     * the method enables and disables SSH for ftp account with ftplogin.
     * @param status 1 - enable, 0 - disable;
     * @param ftplogin ftp account login, if passed enables/disables SSH access
     * to ftp account; if not passed, enables/disables SSH access to main user account;
     */
    toggleSsh(status: 0 | 1, ftplogin?: string): Promise<void> {
        return this.method('toggleSsh', { status, ftplogin });
    }
}
