import { Beget } from '../src';
import { begetConfig } from './test-utils';

describe('Beget', () => {
    it('can be instantiated without error', () => {
        const delegate = (): void => {
            new Beget(begetConfig);
        };

        expect(delegate).not.toThrow(Error);
    });

    it('instantiates user endpoint', () => {
        const beget = new Beget(begetConfig);
        expect(beget.user).not.toBeNull();
    });
});
