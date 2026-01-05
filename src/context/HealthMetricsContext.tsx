import { createContext, useContext, useState } from 'react';
import type { HealthMetrics, FormInputs } from '../types/healthMetricsTypes';
import { calculateAllMetrics } from '../utils/healthMetricsFormulas';
import type { ReactNode } from 'react';

type HealthMetricsContextType = {
  healthMetrics: HealthMetrics;
  updateHealthMetrics: (inputs: FormInputs) => void;
};

const HealthMetricsContext = createContext<HealthMetricsContextType | null>(
  null
);

// eslint-disable-next-line react-refresh/only-export-components
export const useHealthMetricsContext = () => {
  const value = useContext(HealthMetricsContext);

  if (!value) {
    throw new Error(
      'Context value can only be accessed with the HealthMetricsContextProvider'
    );
  }

  return value;
};

export const HealthMetricsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const initialHealthMetrics = calculateAllMetrics({
    weight: 80,
    height: 175,
    age: 30,
    gender: 'male',
    activityLevel: 1.2,
    fitnessGoal: 'maintain',
  });
  const [healthMetrics, setHealthMetrics] =
    useState<HealthMetrics>(initialHealthMetrics);

  function updateHealthMetrics(inputs: FormInputs) {
    const metrics = calculateAllMetrics(inputs);
    setHealthMetrics(metrics);
  }
  return (
    <HealthMetricsContext.Provider
      value={{ healthMetrics, updateHealthMetrics }}
    >
      {children}
    </HealthMetricsContext.Provider>
  );
};
