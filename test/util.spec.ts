
import { oddPosAverage, cleanQueryInput }  from '../src/util';

describe('utility functions', () => {
  describe('oddPosAverage', () => {

    test('Normal', () => {
      // Given
      const input = [1,2,3];

      // When
      const result = oddPosAverage(input);

      // Then
      expect(result).toBe(2);
    });

    test('Empty list', () => {
      // Given
      const input: number[] = [];

      // When
      const result = oddPosAverage(input);

      // Then
      expect(result).toBe(0);
    });

    test('All even', () => {
      // Given
      const input: number[] = [2,2,2,2];

      // When
      const result = oddPosAverage(input);

      // Then
      expect(result).toBe(0);
    });
  });


  describe('cleanQueryInput', () => {
    test('Normal', () => {
      // Given
      const input = '1,2,3';

      // When
      const result = cleanQueryInput(input);

      // Then
      expect(result).toStrictEqual([1,2,3]);
    });
    test('Empty', () => {
      // Given
      const input = '';

      // When
      const result = cleanQueryInput(input);

      // Then
      expect(result).toStrictEqual([]);
    });
    test('Undefined', () => {
      // Given
      const input = undefined;

      // When
      const result = cleanQueryInput(input);

      // Then
      expect(result).toStrictEqual([]);
    });
  });
});
