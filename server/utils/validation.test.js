const expect = require('expect');
const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    const res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    const res = isRealString('    ');
    expect(res).toBe(false);
  });

  it('shoudl allow string with non-space chars', () => {
    const res = isRealString('room name');
    expect(res).toBe(true);
  });
});
