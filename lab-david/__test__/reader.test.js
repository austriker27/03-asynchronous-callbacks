import { type } from 'os';

'use strict';

const reader = require('../lib/reader');

describe('reader.test.js', () => {
  test('the first 50 characters of the file should be returned if there are no errors', (done => {

    reader.readFile((error,data) => {
      expect(error).toBeNull();
      expect(type).toBe('array');
      expect(data).toEqual('Not necessarily. I could be arguing in my spare ti');
      done();
    });
  }));
});