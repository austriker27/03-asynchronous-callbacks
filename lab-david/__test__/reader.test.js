'use strict';

const reader = require('../lib/reader');

describe('reader.test.js', () => {
  test('the first 50 characters of the file should be returned if there are no errors', (done => {

    reader.readFile((error,data) => {
      expect(error).toBeNull();
      //TODO: require that the array of filepaths be an array
      //    expect(type).toBe('array');
      expect(data).toEqual([`Not necessarily. I could be arguing in my spare ti`, `Are you suggesting coconuts migrate? You don't fr`, `This is boring. Let's go watch a stoning. Manacle`]);
      done();
    });
  }));
});