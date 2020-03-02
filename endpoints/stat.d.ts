import { BegetRequest } from '../beget-request';
import { LinkDomain } from '../types/site.interface';
import { AvarageLoad, AvarageLoadDB, MysqlLoadInfo, SiteLoad } from '../types/stat.interface';
export declare class StatEndpoint {
    private readonly client;
    constructor(client: BegetRequest);
    /**
     * @private
     */
    private method;
    /**
     * Method returns information about the average load on user websites
     * within the last month.
     * @returns Returns website list and average load thereof (in descending order)
     */
    getSiteListLoad(): Promise<AvarageLoad[]>;
    /**
     * Method returns information about the average load on the user's databases
     * for the past month.
     * @returns Returns list of database names and the average load thereof
     * (in descending order)
     */
    getDbListLoad(): Promise<AvarageLoadDB[]>;
    /**
     * Method returns detailed information about the load on the given webiste
     * (load per day and hour)
     * @returns Returns load list for the past 30 days (per day).
     * As well as load list for the past 24 hours (per hour)
     */
    getSiteLoad(params: Pick<LinkDomain, 'site_id'>): Promise<SiteLoad>;
    /**
     * Method returns detailed information about load on the given MySQL database.
     * @param db_name database name
     */
    getDbLoad(db_name: string): Promise<MysqlLoadInfo>;
}
