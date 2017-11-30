'use strict';

const reader = require('../lib/reader');

describe('reader.test.js', () => {
  test('the first 50 characters of each file should be returned if there are no errors', (done) => {

    reader.readFile(((error, paths) => {
      expect(error).toBeNull();
      expect(paths).toBe('array');
    }),
    (error,newArray) => {
      expect(error).toBeNull();
      expect(newArray).toEqual([`Not necessarily. I could be arguing in my spare ti`, `Are you suggesting coconuts migrate? You don't fri`, `This is boring. Let's go watch a stoning. Manacles`]);
      done();
    });
  });
});