import { describe, it, expect } from 'vitest';
import type { FormInputs } from '../types/healthMetricsTypes';
import {
  calculateBMI,
  calculateCalories,
  calculateIdealWeightRange,
  getBMICategory,
} from '../utils/healthMetricsFormulas';

describe('health metrics calculation', () => {
  it('calculates BMI correctly', () => {
    expect(calculateBMI(60, 170)).toBeCloseTo(20.8, 1);
  });

  it('gets BMI category correctly', () => {
    // edge cases
    expect(getBMICategory(15)).toBe('underweight');
    expect(getBMICategory(50)).toBe('morbidlyObese');

    // boundary cases
    expect(getBMICategory(18.5)).toBe('normal');
    expect(getBMICategory(25)).toBe('overweight');
    expect(getBMICategory(30)).toBe('obese');
    expect(getBMICategory(35)).toBe('morbidlyObese');
  });

  it('calculates ideal weight range correctly', () => {
    const range = calculateIdealWeightRange(170);
    expect(range.min).toBe(53);
    expect(range.max).toBe(72);
  });

  it('calculates calories correctly', () => {
    const exampleUser: FormInputs = {
      weight: 60,
      height: 170,
      age: 30,
      gender: 'female',
      activityLevel: 1.55,
      fitnessGoal: 'cut',
    };
    const calories = calculateCalories(exampleUser);
    expect(calories.TDEE).toBe(2096);
    expect(calories.intake).toBe(1796);
  });
});
