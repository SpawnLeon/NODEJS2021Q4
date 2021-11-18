import { expect } from '@jest/globals';
import caesar from '../../lib/caesar.js';

test('test message', () => {
  const result = caesar('This is secret. Message about "_" symbol!', 1);
  expect(result).toBe('Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!');
});
