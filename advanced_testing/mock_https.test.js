import nock from "nock";

import { getPrivateForkNames } from '../test.js';

nock.disableNetConnect();

test('getPrivateForkNames', async () => {
    const scope = nock('https://api.github.com')
        .get('/orgs/hexlet/repos/?private=true')
        .reply(200, [
            {
                fork: true,
                name: 'one',
            },
            {
                fork: false,
                name: 'two'
            }
        ]);

    await getPrivateForkNames('hexlet');
    expect(scope.isDone()).toBe(true);
});