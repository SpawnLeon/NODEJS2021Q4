import { expect } from '@jest/globals';
import caesar from '../../lib/caesar.js';

describe('function a', () => {
  it('should return expected value', () => {
    const result = caesar('This is secret. Message about "_" symbol!', 1);
    expect(result).toBe('Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!');
  });
});

console.log(111);
