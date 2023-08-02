import {currencyFormat, formatNumberToKMB} from './currencyFormat';

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

describe('formatNumberToKMB', () => {
  it('should format a large number to K format', () => {
    const result = formatNumberToKMB(1500);
    expect(result).toBe('1.5K');
  });

  it('should format a large number to M format', () => {
    const result = formatNumberToKMB(1500000);
    expect(result).toBe('1.5M');
  });

  it('should format a large number to B format', () => {
    const result = formatNumberToKMB(1500000000);
    expect(result).toBe('1.5B');
  });

  it('should format a small number without abbreviation', () => {
    const result = formatNumberToKMB(500);
    expect(result).toBe('500');
  });

  it('should format a negative number without abbreviation', () => {
    const result = formatNumberToKMB(-500);
    expect(result).toBe('-500');
  });

  it('should format a zero without abbreviation', () => {
    const result = formatNumberToKMB(0);
    expect(result).toBe('0');
  });

  it('should format a NaN without abbreviation', () => {
    const result = formatNumberToKMB(NaN);
    expect(result).toBe('NaN');
  });
});
