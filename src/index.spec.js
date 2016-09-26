import { Add } from './index';
import expect, { createSpy, spyOn, isSpy } from 'expect';

describe('The Add function', () => {
  it('should add two values', () => {
    expect(Add(2, 2)).toBe(4);
  });
});
