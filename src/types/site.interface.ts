interface Domain {
    /**
     * the website ID is unique within one user.
     * @example '12345'
     */
    id: number;
    /**
     * @example  'site.de'
     */
    fqdn: string;
}

export interface Website {
    /**
     * webiste id, type int;
     * @example '125'
     */
    id: number;
    /**
     * @example  'site.de/public_html'
     */
    path: 'site.de/public_html';
    domains: Domain[];
}

export interface LinkDomain {
    /**
     * you can receive the unique domain id via the function domain/getList;
     */
    domain_id: number;
    /**
     * website ID
     */
    site_id: number;
}

export interface FreezeOptions extends Pick<Website, 'id'> {
    /**
     * list of paths in which file changes will be allowed
     */
    excludedPaths: string[];
}
