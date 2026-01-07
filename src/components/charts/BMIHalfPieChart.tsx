import { Pie, PieChart } from 'recharts';
import { themeColors } from '../../utils/themeColors';

const bmiRanges = [
  {
    category: 'underweight',
    label: 'Underweight',
    min: 12,
    max: 18.4,
    color: themeColors.cyan,
  },
  {
    category: 'normal',
    label: 'Normal',
    min: 18.5,
    max: 24.9,
    color: themeColors.green,
  },
  {
    category: 'overweight',
    label: 'Overweight',
    min: 25,
    max: 29.9,
    color: themeColors.yellow,
  },
  {
    category: 'obese',
    label: 'Obese',
    min: 30,
    max: 39.9,
    color: themeColors.orange,
  },
  {
    category: 'morbid',
    label: 'Morbidly Obese',
    min: 40,
    max: 50,
    color: themeColors.red,
  },
];

const buildPieData = (category: string) => {
  return bmiRanges.map((range) => ({
    name: range.label,
    value: range.max - range.min,
    fill: range.color,
    opacity: range.category === category ? 1 : 0.3,
  }));
};

const BMIHalfPieChart = ({ category }: { category: string }) => {
  const data = buildPieData(category);

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
