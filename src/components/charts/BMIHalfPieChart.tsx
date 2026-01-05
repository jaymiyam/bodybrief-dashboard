import { useHealthMetricsContext } from '../../context/HealthMetricsContext';
import { Pie, PieChart } from 'recharts';
import { themeColors } from '../../utils/themeColors';

const bmiRanges = [
  {
    key: 'underweight',
    label: 'Underweight',
    min: 12,
    max: 18.4,
    color: themeColors.cyan,
  },
  {
    key: 'normal',
    label: 'Normal',
    min: 18.5,
    max: 24.9,
    color: themeColors.green,
  },
  {
    key: 'overweight',
    label: 'Overweight',
    min: 25,
    max: 29.9,
    color: themeColors.yellow,
  },
  {
    key: 'obese',
    label: 'Obese',
    min: 30,
    max: 39.9,
    color: themeColors.orange,
  },
  {
    key: 'morbid',
    label: 'Morbidly Obese',
    min: 40,
    max: 50,
    color: themeColors.red,
  },
];

const getBMICategoryKey = (bmi: number) =>
  bmiRanges.find((r) => bmi >= r.min && bmi <= r.max)?.key;

const buildPieData = (bmi: number) => {
  const activeKey = getBMICategoryKey(bmi);

  return bmiRanges.map((range) => ({
    name: range.label,
    value: range.max - range.min,
    fill: range.color,
    opacity: range.key === activeKey ? 1 : 0.3,
  }));
};

const BMIHalfPieChart = () => {
  const { healthMetrics } = useHealthMetricsContext();
  const bmi = healthMetrics.BMI;

  const data = buildPieData(bmi);

  return (
    <PieChart width={210} height={120} responsive>
      <Pie
        data={data}
        dataKey="value"
        startAngle={180}
        endAngle={0}
        cx={100}
        cy={100}
        innerRadius={75}
        outerRadius={100}
        stroke="none"
        cornerRadius={10}
        paddingAngle={3}
        isAnimationActive
      />
    </PieChart>
  );
};

export default BMIHalfPieChart;
