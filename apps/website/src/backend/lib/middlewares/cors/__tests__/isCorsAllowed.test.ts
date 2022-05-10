import { isCorsAllowed } from '../isCorsAllowed';

describe('cors-middleware.utils tests', () => {
  describe('isCorsAllowed', () => {
    const localhostRegexp = /^https?:\/\/localhost((:\d{2,4})?(\/.*)?$)/i;

    describe('when whitelistRegExp is null', () => {
      it('should return false', () => {
        expect(
          isCorsAllowed({ origin: 'http://localhost', whitelistRegExp: null })
        ).toBeFalsy();
        expect(
          isCorsAllowed({
            origin: null,
            whitelistRegExp: null,
            blockMissingOrigin: true,
          })
        ).toBeFalsy();
      });
    });

    describe('when whitelistRegExp is undefined', () => {
      it('should return false', () => {
        expect(
          isCorsAllowed({
            origin: 'http://localhost',
            whitelistRegExp: undefined,
          })
        ).toBeFalsy();
      });
    });

    describe('when whitelistRegexp matches', () => {
      it.each(['http://localhost'])(
        'should return true for allowed origins (%p)',
        (origin) => {
          expect(
            isCorsAllowed({ origin, whitelistRegExp: localhostRegexp })
          ).toBeTruthy();
        }
      );
    });

    describe('when complex whitelistRegexp matches', () => {
      const allowed = [
        'getfirefox.com',
        'mozilla.org',
        'belgattitude.vercel.app',
        'localhost:3000',
        'test.local',
        // regexp
        '.+\\-xxx.vercel.app',
      ];

      const regexp = new RegExp(
        `^https?://(([^/])+.)?(${allowed.join('|')})(:d+)?(/.*)?$`
      );
      it.each(allowed.map((_url) => `https://${allowed}`))(
        'should return true for allowed origins (%p)',
        (origin) => {
          expect(
            isCorsAllowed({ origin, whitelistRegExp: regexp })
          ).toBeTruthy();
        }
      );
    });

    describe('when whitelistHost matches', () => {
      it.each(['http://localhost'])(
        'should return true for allowed origins (%p)',
        (origin) => {
          expect(
            isCorsAllowed({ origin, whitelistHosts: ['http://localhost'] })
          ).toBeTruthy();
        }
      );
    });

    describe('when origin is null', () => {
      it('should return false if blockMissingOrigin is true', () => {
        expect(
          isCorsAllowed({
            origin: null,
            whitelistRegExp: localhostRegexp,
            blockMissingOrigin: true,
          })
        ).toBeFalsy();
      });
      it('should return false if blockMissingOrigin is false', () => {
        expect(
          isCorsAllowed({
            origin: null,
            whitelistRegExp: localhostRegexp,
            blockMissingOrigin: false,
          })
        ).toBeTruthy();
      });
    });
  });
});
