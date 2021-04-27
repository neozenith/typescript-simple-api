
import { oddPosAverage }  from '../src/util';

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
});
