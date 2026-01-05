import GridCellWrapper from './GridCellWrapper';
import { useHealthMetricsContext } from '../context/HealthMetricsContext';

const IdealWeightRangeCell = () => {
  const { healthMetrics } = useHealthMetricsContext();
  const data = healthMetrics.idealWeightRange;

  return (
    <GridCellWrapper
      cellClass="cell-weight"
      title="Ideal Weight Range"
      titleId="ideal-weight-range-title"
    >
      <p className="sr-only">
        Your ideal weight range is between {data.min} and {data.max} kilograms,
        based on a normal BMI range.
      </p>
      <div className="flex flex-col gap-4 justify-start" aria-hidden="true">
        <p>
          <span className="text-5xl font-medium">{data.min}</span>
          <span className="text-xl">kg</span>
          <span className="text-5xl">~</span>
          <span className="text-5xl font-medium">{data.max}</span>
          <span className="text-xl">kg</span>
        </p>
        <p className="text-sm text-balance">
          *Calculated from normal BMI range: 18.5 ~ 24.9
        </p>
      </div>
    </GridCellWrapper>
  );
};

export default IdealWeightRangeCell;
