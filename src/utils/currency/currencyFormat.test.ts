import {currencyFormat} from './currencyFormat';

describe('currencyFormat', () => {
  it('should format positive values correctly', () => {
    const value = 12345.67;
    const formattedValue = currencyFormat(value);
    expect(formattedValue).toBe('$12,345.67');
  });

  it('should format negative values correctly', () => {
    const value = -9876.54;
    const formattedValue = currencyFormat(value);
    expect(formattedValue).toBe('-$9,876.54');
  });

  it('should format zero correctly', () => {
    const value = 0;
    const formattedValue = currencyFormat(value);
    expect(formattedValue).toBe('$0.00');
  });

  it('should format very large values correctly', () => {
    const value = 1234567890.12345;
    const formattedValue = currencyFormat(value);
    expect(formattedValue).toBe('$1,234,567,890.12');
  });

  it('should handle non-numeric values', () => {
    const value = NaN;
    const formattedValue = currencyFormat(value);
    expect(formattedValue).toBe('NaN');
  });
});
