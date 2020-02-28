import { BegetRequest } from '../beget-request';
import { Methods } from '../types/controller.interface';
import { AvarageLoad, AvarageLoadDB, SiteLoad, MysqlLoadInfo } from '../types/stat.interface';
import { LinkDomain } from '../types/site.interface';

export class StatEndpoint {
    constructor(private readonly client: BegetRequest) {}

    /**
     * @private
     */
    private method<T>(method: Methods['stat'], data?: object): Promise<T> {
        return this.client.api('stat', method, data);
    }

    /**
     * Method returns information about the average load on user websites
     * within the last month.
     * @returns Returns website list and average load thereof (in descending order)
     */
    getSiteListLoad(): Promise<AvarageLoad[]> {
        return this.method('getSiteListLoad');
    }

    /**
     * Method returns information about the average load on the user's databases
     * for the past month.
     * @returns Returns list of database names and the average load thereof
     * (in descending order)
     */
    getDbListLoad(): Promise<AvarageLoadDB[]> {
        return this.method('getDbListLoad');
    }

    /**
     * Method returns detailed information about the load on the given webiste
     * (load per day and hour)
     * @returns Returns load list for the past 30 days (per day).
     * As well as load list for the past 24 hours (per hour)
     */
    getSiteLoad(params: Pick<LinkDomain, 'site_id'>): Promise<SiteLoad> {
        return this.method('getSiteLoad', params);
    }

    /**
     * Method returns detailed information about load on the given MySQL database.
     * @param db_name database name
     */
    getDbLoad(db_name: string): Promise<MysqlLoadInfo> {
        return this.method('getDbLoad', { db_name });
    }
}
