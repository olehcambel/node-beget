export interface Account {
    /**
     * suffix part of login. When passing this parameter, please note
     * that the final login in form of "login_suffix" must not exceed 17 characters;
     */
    suffix: string;
    /**
     * path to home directory of created account.
     * Begins with a slash. (e.g. /site.de/public_html);
     * @example '/public_html'
     */
    homedir: string;
    /**
     * password for new ftp account;
     */
    password: string;
    /**
     * @example 'user_acc1';
     */
    login: string;
}
export declare type AddAccount = Pick<Account, 'suffix' | 'homedir' | 'password'>;
