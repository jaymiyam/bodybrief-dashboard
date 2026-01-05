import GridCellWrapper from './GridCellWrapper';
import BMIHalfPieChart from './charts/BMIHalfPieChart';
import { useHealthMetricsContext } from '../context/HealthMetricsContext';

type BMICategory =
  | 'underweight'
  | 'normal'
  | 'overweight'
  | 'obese'
  | 'morbidlyObese';

function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 25) return 'normal';
  if (bmi < 30) return 'overweight';
  if (bmi < 35) return 'obese';
  return 'morbidlyObese';
}

const BMICell = () => {
  const { healthMetrics } = useHealthMetricsContext();
  const bmi = healthMetrics.BMI;
  const category = getBMICategory(bmi);

  const dataMapping = {
    underweight: {
      text: 'Underweight',
      color: 'bg-theme-cyan',
    },
    normal: {
      text: 'Normal',
      color: 'bg-theme-green',
    },
    overweight: {
      text: 'Overweight',
      color: 'bg-theme-yellow',
    },
    obese: {
      text: 'Obese',
      color: 'bg-theme-orange',
    },
    morbidlyObese: {
      text: 'Morbidly Obese',
      color: 'bg-theme-red',
    },
  };

  return (
    <GridCellWrapper cellClass="cell-bmi" title="BMI" titleId="bmi-title">
      <div className="relative flex flex-col justify-center items-center">
        <BMIHalfPieChart />
        <p
          aria-label={`Body mass index is ${bmi}`}
          className="absolute text-5xl font-medium bottom-0 left-1/2 transform -translate-x-1/2"
        >
          {bmi}
        </p>
      </div>
      <span className="sr-only">BMI category</span>
      <p
        className={`mt-2 text-center font-medium rounded-full p-0.5 ${dataMapping[category].color}`}
      >
        {dataMapping[category].text}
      </p>
    </GridCellWrapper>
  );
};

export default BMICell;
