import atbash from '../../lib/atbash.js';

describe('Caesar chipper module', () => {
  it('testing different symbols', () => {
    const result = atbash('This is secret. Message about "_" symbol!');
    expect(result).toBe('Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!');
  });

  it('cyrillic symbols do not change', () => {
    const result = atbash('Кириллические символы');
    expect(result).toBe('Кириллические символы');
  });

  it('numbers do not change', () => {
    const result = atbash('1234567890');
    expect(result).toBe('1234567890');
  });
});
