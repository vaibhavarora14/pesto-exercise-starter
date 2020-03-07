/* eslint-disable func-names */
/* eslint-disable no-console */
// Write your own test cases.
import { customForEach } from './arrayUtils';

describe('test of custom ForEach implementation', () => {
  test('when it\'s not array', () => {
    expect(() => { customForEach('string', () => { }); }).toThrow(TypeError);
    expect(() => { customForEach(123, () => { }); }).toThrow(TypeError);
    expect(() => { customForEach({}, () => { }); }).toThrow(TypeError);
  });
  test('when callback is not a function', () => {
    expect(() => { customForEach([1, 2], 123); }).toThrow(TypeError);
    expect(() => { customForEach([1, 2], 'string'); }).toThrow(TypeError);
    expect(() => { customForEach([1, 2], {}); }).toThrow(TypeError);
  });
  test('when thisArgument is specific', () => {
    expect(customForEach([1, 2], () => {
      console.log(1);
    })).toBe(undefined);
    expect(customForEach([1, 2], function () {
      console.log(this.name);
    }, { name: 'vaibhu' })).toBe(undefined);
  });
  test('when array and callback are there without thisArgument', () => {
    expect(customForEach([], () => { })).toBe(undefined);
    expect(customForEach([1, 2], (item, index, array) => {
      console.log(`Item - ${item}; Index - ${index}; Array - ${array}`);
    })).toBe(undefined);
  });
});
