export interface AvarageLoad {
    /**
     * the database name is unique within one user.
     * @example 'sitename.de'
     */
    name: string;
    /**
     * the website id is unique within one user.
     * @example '299163'
     */
    id: string;
    /**
     * @example '195.257188'
     */
    cp: string;
}

export type AvarageLoadDB = Pick<AvarageLoad, 'name' | 'cp'>;

interface SiteLoadParams {
    /**
     * @example '0.35'
     */
    value: string;
    /**
     * @example '2014-05-04'
     */
    date: string;
}

export interface SiteLoad {
    days: SiteLoadParams[];
    hours: SiteLoadParams[];
}

interface TimeStat {
    /**
     * @example '0'
     */
    cpu_time: string;
    /**
     * @example '2014-06-02 20:00:00'
     */
    date: string;
}

interface SizeStat {
    /**
     * @example '2014-05-04'
     */
    date: string;
    /**
     * @example '229512'
     */
    size: string;
}

export interface MysqlLoadInfo {
    hours: TimeStat[];
    days: TimeStat[];
    size_days: SizeStat[];
}
