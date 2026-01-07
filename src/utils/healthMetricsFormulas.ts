import type {
  IdealWeightRange,
  Calories,
  HeartRateZones,
  MacronutrientsRatio,
  Gender,
  FitnessGoal,
  FormInputs,
} from '../types/healthMetricsTypes';

function calculateBMI(weight: number, height: number): number {
  // BMI = weight (kg) / (height in meters)²
  const BMI = weight / Math.pow(height / 100, 2);

  return Math.round(BMI * 10) / 10;
}

function calculateIdealWeightRange(height: number): IdealWeightRange {
  // weight (kg) = BMI * (height in meters)²
  const lowerBoundBMI = 18.5;
  const upperBoundBMI = 24.9;

  return {
    min: Math.round(lowerBoundBMI * Math.pow(height / 100, 2)),
    max: Math.round(upperBoundBMI * Math.pow(height / 100, 2)),
  };
}

function calculateCalories(
  weight: number,
  height: number,
  age: number,
  gender: Gender,
  activityLevel: number,
  fitnessGoal: FitnessGoal
): Calories {
  // Mifflin–St Jeor equation
  let BMR;
  if (gender === 'female') {
    BMR = Math.round(10 * weight + 6.25 * height - 5 * age - 161);
  } else {
    BMR = Math.round(10 * weight + 6.25 * height - 5 * age + 5);
  }

  const TDEE = Math.round(BMR * activityLevel);

  let intake = 0;

  if (fitnessGoal === 'maintain') {
    intake = TDEE;
  } else if (fitnessGoal === 'cut') {
    intake = TDEE - 300;
  } else if (fitnessGoal === 'bulk') {
    intake = TDEE + 300;
  }

  return {
    BMR,
    TDEE,
    intake,
  };
}

function calculateHeartRateZones(age: number): HeartRateZones {
  // Karvonen method
  const maxHR = 220 - age;
  return {
    zone1: { min: Math.round(maxHR * 0.5), max: Math.round(maxHR * 0.6) },
    zone2: { min: Math.round(maxHR * 0.6), max: Math.round(maxHR * 0.7) },
    zone3: { min: Math.round(maxHR * 0.7), max: Math.round(maxHR * 0.8) },
    zone4: { min: Math.round(maxHR * 0.8), max: Math.round(maxHR * 0.9) },
    zone5: { min: Math.round(maxHR * 0.9), max: Math.round(maxHR * 1.0) },
  };
}

export function transformHRZforChart(zones: HeartRateZones) {
  return [
    {
      name: 'Heart Rate Zones',
      zone1: [zones.zone1.min, zones.zone1.max],
      zone2: [zones.zone1.max, zones.zone2.max],
      zone3: [zones.zone2.max, zones.zone3.max],
      zone4: [zones.zone3.max, zones.zone4.max],
      zone5: [zones.zone4.max, zones.zone5.max],
    },
  ];
}

function getMacronutrients(fitnessGoal: FitnessGoal): MacronutrientsRatio {
  const macronutrientsRatio = {
    cut: {
      protein: 0.45,
      carbs: 0.35,
      fat: 0.2,
    },
    maintain: {
      protein: 0.25,
      carbs: 0.5,
      fat: 0.25,
    },
    bulk: {
      protein: 0.35,
      carbs: 0.45,
      fat: 0.2,
    },
  };

  return macronutrientsRatio[fitnessGoal];
}

export function calculateAllMetrics(inputs: FormInputs) {
  const { weight, height, age, gender, activityLevel, fitnessGoal } = inputs;
  const BMI = calculateBMI(weight, height);
  const idealWeightRange = calculateIdealWeightRange(height);
  const calories = calculateCalories(
    weight,
    height,
    age,
    gender,
    activityLevel,
    fitnessGoal
  );
  const heartRateZones = calculateHeartRateZones(age);
  const macronutrients = getMacronutrients(fitnessGoal);

  return {
    BMI,
    idealWeightRange,
    calories,
    heartRateZones,
    macronutrients,
  };
}
