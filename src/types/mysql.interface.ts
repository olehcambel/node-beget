export interface DB {
    name: 'user_mydb';
    size: '1';
    accesses: {
        /**
         * @example 'localhost'
         */
        name: string;
    }[];
}

export interface DBConf {
    /**
     * suffix part of the database name. When passing this parameter,
     * please note that the final login of the form "login_suffix"
     * must be no longer than 16 characters.;
     * @example 'newdb'
     */
    suffix: string;
    /**
     * Password for the new database. It must contain at least 6 characters;
     * @example 'password'
     */
    password: string;
    /**
     * access name - it can be: domain, IP, * or localhost;
     * @example '192.168.100.100'
     */
    access: string;
}

// interface Access extends AddDB {
// }
