import GridCellWrapper from './GridCellWrapper';
import FormInputWrapper from './FormInputWrapper';
import { type FormEvent, useState } from 'react';
import type { FitnessGoal, FormInputs } from '../types/healthMetricsTypes';
import { useHealthMetricsContext } from '../context/HealthMetricsContext';

const UserFormCell = () => {
  const { updateHealthMetrics } = useHealthMetricsContext();

  const [formValues, setFormValues] = useState<FormInputs>({
    weight: 80,
    height: 175,
    age: 30,
    gender: 'male',
    activityLevel: 1.2,
    fitnessGoal: 'maintain',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateHealthMetrics(formValues);
  };

  return (
    <GridCellWrapper
      cellClass="cell-form"
      title="Basic Information"
      titleId="basic-information-title"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-3 items-center justify-start"
      >
        <FormInputWrapper>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            min={20}
            max={100}
            required
            value={formValues.age}
            onChange={(e) =>
              setFormValues({ ...formValues, age: Number(e.target.value) })
            }
            className="bg-white px-2 py-1 rounded-lg border border-indigo-200"
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <label htmlFor="weight">Weight(kg):</label>
          <span id="weight-unit" className="sr-only">
            in kilograms
          </span>
          <input
            type="number"
            name="weight"
            id="weight"
            aria-describedby="weight-unit"
            min={0}
            max={200}
            required
            value={formValues.weight}
            onChange={(e) =>
              setFormValues({ ...formValues, weight: Number(e.target.value) })
            }
            className="bg-white px-2 py-1 rounded-lg border border-indigo-200"
          />
        </FormInputWrapper>
        <FormInputWrapper>
          <label htmlFor="height">Height(cm):</label>
          <span id="height-unit" className="sr-only">
            in centimeters
          </span>
          <input
            type="number"
            name="height"
            id="height"
            aria-describedby="height-unit"
            min={100}
            max={250}
            required
            value={formValues.height}
            onChange={(e) =>
              setFormValues({ ...formValues, height: Number(e.target.value) })
            }
            className="bg-white px-2 py-1 rounded-lg border border-indigo-200"
          />
        </FormInputWrapper>

        <FormInputWrapper>
          <label htmlFor="activity-level">Activity Level:</label>
          <select
            name="activity-level"
            id="activity-level"
            value={formValues.activityLevel}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                activityLevel: Number(e.target.value),
              })
            }
            className="bg-white px-2 py-1 rounded-lg border border-indigo-200"
          >
            <option value="1.2">Sedentary</option>
            <option value="1.375">Light</option>
            <option value="1.55">Moderate</option>
            <option value="1.725">Very</option>
            <option value="1.9">Extra</option>
          </select>
        </FormInputWrapper>
        <FormInputWrapper>
          <label htmlFor="fitness-goal">Fitness Goal:</label>
          <select
            name="fitness-goal"
            id="fitness-goal"
            value={formValues.fitnessGoal}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                fitnessGoal: e.target.value as FitnessGoal,
              })
            }
            className="bg-white px-2 py-1 rounded-lg border border-indigo-200"
          >
            <option value="maintain">Maintain</option>
            <option value="cut">Lose fat</option>
            <option value="bulk">Bulk up</option>
          </select>
        </FormInputWrapper>
        <FormInputWrapper>
          <fieldset className="contents">
            <legend>Gender:</legend>
            <div>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                required
                checked={formValues.gender === 'female'}
                onChange={() =>
                  setFormValues({ ...formValues, gender: 'female' })
                }
                className="bg-white px-2 py-1 mr-0.5 rounded-lg border border-indigo-200"
              />
              <label htmlFor="female">F</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                required
                checked={formValues.gender === 'male'}
                onChange={() =>
                  setFormValues({ ...formValues, gender: 'male' })
                }
                className="bg-white px-2 py-1 mr-0.5 rounded-lg border border-indigo-200"
              />
              <label htmlFor="male">M</label>
            </div>
          </fieldset>
        </FormInputWrapper>
        <button
          type="submit"
          className="cursor-pointer px-4 py-2 text-off-black text-base font-medium bg-white border border-theme-blue rounded-xl shadow-md shadow-theme-blue/30 hover:border-white hover:text-white hover:bg-theme-blue transition-all"
        >
          Calculate
        </button>
      </form>
    </GridCellWrapper>
  );
};

export default UserFormCell;
