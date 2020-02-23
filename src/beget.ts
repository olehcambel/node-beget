import { BegetRequest } from './beget-request';
import { UserEndpoint } from './endpoints/user';
import { BegetOptions } from './options/beget-options';

export interface BegetClient {
    readonly user: UserEndpoint;
}

export class Beget implements BegetClient {
    readonly user: UserEndpoint;

    constructor(config: BegetOptions) {
        const begetRequest = new BegetRequest(config);

        this.user = new UserEndpoint(begetRequest);
    }
}
