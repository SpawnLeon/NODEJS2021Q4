import caesar from '../../lib/caesar.js';

describe('Caesar chipper module', () => {
  it('testing shift 1', () => {
    const result = caesar('This is secret. Message about "_" symbol!', 1);
    expect(result).toBe('Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!');
  });

  it('testing shift -1', () => {
    const result = caesar('This is secret. Message about "_" symbol!', -1);
    expect(result).toBe('Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!');
  });

  it('cyrillic symbols do not change, shift 10', () => {
    const result = caesar('Кириллические символы', 10);
    expect(result).toBe('Кириллические символы');
  });

  it('numbers do not change, shift 2', () => {
    const result = caesar('1234567890', 2);
    expect(result).toBe('1234567890');
  });
});
