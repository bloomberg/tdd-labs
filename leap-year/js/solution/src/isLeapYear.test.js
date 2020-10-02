import isLeapYear from './isLeapYear';

test('2017 is not a leap year',() => {
    // Given
    const year = 2017
  
    // When
    const result = isLeapYear(year);
  
    // Then
    expect(result).toBe(false);
  });
  
  test('2016 is a leap year',() => {
    // Given
    const year = 2016;
  
    // When
    const result = isLeapYear(year);
  
    // Then
    expect(result).toBe(true);
  });
  
  test('2012 is a leap year',() => {
    // Given
    const year = 2012;
  
    // When
    const result = isLeapYear(year);
  
    // Then
    expect(result).toBe(true);
  });
  
  test('1900 is a not leap year',() => {
    // Given
    const year = 1900;
  
    // When
    const result = isLeapYear(year);
  
    // Then
    expect(result).toBe(false);
  });
  
  test('2000 is a leap year',() => {
    // Given
    const year = 2000;
  
    // When
    const result = isLeapYear(year);
  
    // Then
    expect(result).toBe(true);
  });
