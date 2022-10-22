import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return 1234', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '1234',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('1234');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
