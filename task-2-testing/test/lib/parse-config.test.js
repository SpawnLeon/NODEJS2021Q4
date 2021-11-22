import parseConfig from '../../lib/parse-config.js';

describe('Caesar parse config module', () => {
  it('testing C1R1', () => {
    const result = parseConfig('C1R1');
    expect(result).toBeTruthy();
  });

  it('testing C1', () => {
    const result = parseConfig('C1');
    expect(result).toBeTruthy();
  });

  it('testing C0R1A', () => {
    const result = parseConfig('C0R1A');
    expect(result).toBeTruthy();
  });
});
