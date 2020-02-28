import { Beget } from '../src';
import { begetConfig } from './test-utils';

describe('Beget', () => {
    it('can be instantiated without error', () => {
        const delegate = (): void => {
            new Beget(begetConfig);
        };

        expect(delegate).not.toThrow(Error);
    });

    describe('instantiates ALL endpoints', () => {
        const beget = new Beget(begetConfig);

        it('instantiates backup endpoint', () => {
            expect(beget.backup).not.toBeNull();
        });

        it('instantiates cron endpoint', () => {
            expect(beget.cron).not.toBeNull();
        });

        it('instantiates dns endpoint', () => {
            expect(beget.dns).not.toBeNull();
        });

        it('instantiates domains endpoint', () => {
            expect(beget.domain).not.toBeNull();
        });

        // it('instantiates ftp endpoint', () => {
        //     expect(beget.ftp).not.toBeNull();
        // });

        it('instantiates mail endpoint', () => {
            expect(beget.mail).not.toBeNull();
        });

        // it('instantiates mysql endpoint', () => {
        //     expect(beget.mysql).not.toBeNull();
        // });

        it('instantiates site endpoint', () => {
            expect(beget.site).not.toBeNull();
        });

        it('instantiates stat endpoint', () => {
            expect(beget.stat).not.toBeNull();
        });

        it('instantiates user endpoint', () => {
            expect(beget.user).not.toBeNull();
        });
    });
});
