import GridCellWrapper from './GridCellWrapper';
import CaloriesBarChart from './charts/CaloriesBarChart';
import { useHealthMetricsContext } from '../context/HealthMetricsContext';

const CaloriesCell = () => {
  const { healthMetrics } = useHealthMetricsContext();
  const calories = healthMetrics.calories;

  return (
    <GridCellWrapper
      cellClass="cell-calories flex flex-col"
      title="Calories Overview (in kcal)"
      titleId="calories-title"
    >
      {/* text summary for screen reader */}
      <p className="sr-only">
        Total daily energy expenditure is {calories.TDEE} kilocalories.
        Recommended daily intake is {calories.intake} kilocalories.
      </p>
      {/* text data content */}
      <div className="grid grid-cols-2 gap-4 items-center justify-center">
        <div className="text-center text-theme-red justify-self-end">
          <h3 className="text-2xl md:text-3xl font-bold">TDEE</h3>
          <p className="leading-tight text-balance">
            Total Daily <br /> Energy Expenditure
          </p>
          <p className="mt-2 text-4xl md:text-5xl font-medium tracking-tighter">
            {calories.TDEE.toLocaleString()}
          </p>
        </div>
        <div className="text-center text-theme-blue justify-self-start">
          <h3 className="text-2xl md:text-3xl font-bold">Intake</h3>
          <p className=" leading-tight">
            Recommended <br /> Daily Intake
          </p>
          <p className="mt-2 text-4xl md:text-5xl font-medium tracking-tighter">
            {calories.intake.toLocaleString()}
          </p>
        </div>
      </div>
      {/* chart */}
      <div className="h-full grid place-items-center">
        <CaloriesBarChart />
      </div>
    </GridCellWrapper>
  );
};

export default CaloriesCell;
