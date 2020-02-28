import { BegetRequest } from '../beget-request';
import { Methods } from '../types/controller.interface';
import { FreezeOptions, LinkDomain, Website } from '../types/site.interface';

export class SiteEndpoint {
    constructor(private readonly client: BegetRequest) {}

    /**
     * @private
     */
    private method<T>(method: Methods['site'], data?: object): Promise<T> {
        return this.client.api('site', method, data);
    }

    /**
     * Method returns website list. If domains are linked to it,
     * they will also be returned.
     */
    getList(): Promise<Website[]> {
        return this.method('getList');
    }

    /**
     * Method creates new website with given name.
     * @param name name of directory with website (e.g. site.de);
     * @returns Returns property of successful or unsuccessful execution.
     * In case of a successful response the full path to directory with
     * website will be name/public_html.
     */
    add(name: string): Promise<boolean> {
        return this.method('add', { name });
    }

    /**
     * Method deletes website. If domains were linked to the website, they
     * will be unlinked from it.
     * @returns Returns property of successful or unsuccessful execution.
     */
    delete(params: Pick<Website, 'id'>): Promise<boolean> {
        return this.method('delete', params);
    }

    /**
     * Method links domain to website.
     * @returns Returns property of successful or unsuccessful execution.
     * Upon operation performance, the website will begin to open under the
     * domain name within 5-10 minutes.
     */
    linkDomain(params: LinkDomain): Promise<boolean> {
        return this.method('linkDomain', params);
    }

    /**
     * Method unlinks domain.
     * @returns Returns property of successful or unsuccessful execution.
     */
    unlinkDomain(params: Pick<LinkDomain, 'domain_id'>): Promise<boolean> {
        return this.method('unlinkDomain', params);
    }

    /**
     * The method prohibits changing site files.
     * @returns Returns property of successful or unsuccessful execution.
     * Upon operation performance, the website will begin to open under the
     * domain name within 5-10 minutes.
     */
    freeze(params: FreezeOptions): Promise<boolean> {
        return this.method('freeze', params);
    }
    /**
     * The method allows changing site files.
     * @returns Returns property of successful or unsuccessful execution.
     * Upon operation performance, the website will begin to open under the
     * domain name within 5-10 minutes.
     */
    unfreeze(params: Pick<Website, 'id'>): Promise<boolean> {
        return this.method('unfreeze', params);
    }
    /**
     * The method returns the current status of the site,
     * whether file editing is available.
     */
    isSiteFrozen(params: Pick<LinkDomain, 'site_id'>): Promise<boolean> {
        return this.method('isSiteFrozen', params);
    }
}
