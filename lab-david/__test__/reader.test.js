'use strict';

const reader = require('../lib/reader');

describe('reader.test.js', () => {
  test('the first 50 characters of each file should be returned if there are no errors', (done => {

    reader.readFile((error,newArray) => {
      expect(error).toBeNull();
      //TODO: require that the array of filepaths be an array
      //    expect(type).toBe('array');
      // TODO: write a test to make sure the filepath is valid
      expect(newArray).toEqual([`Not necessarily. I could be arguing in my spare ti`, `Are you suggesting coconuts migrate? You don't fri`, `This is boring. Let's go watch a stoning. Manacles`]);
      done();
    });
  }));
});