export type Gender = 'female' | 'male';
export type FitnessGoal = 'cut' | 'maintain' | 'bulk';
export type IdealWeightRange = {
  min: number;
  max: number;
};
export type BMICategory =
  | 'underweight'
  | 'normal'
  | 'overweight'
  | 'obese'
  | 'morbidlyObese';
export type Calories = {
  BMR: number;
  TDEE: number;
  intake: number;
};
export type HeartRateZones = {
  zone1: { min: number; max: number };
  zone2: { min: number; max: number };
  zone3: { min: number; max: number };
  zone4: { min: number; max: number };
  zone5: { min: number; max: number };
};
export type MacronutrientsRatio = {
  protein: number;
  carbs: number;
  fat: number;
};

export type HealthMetrics = {
  BMI: number;
  idealWeightRange: IdealWeightRange;
  calories: Calories;
  heartRateZones: HeartRateZones;
  macronutrients: MacronutrientsRatio;
};

export type FormInputs = {
  weight: number;
  height: number;
  age: number;
  gender: Gender;
  activityLevel: number;
  fitnessGoal: FitnessGoal;
};
