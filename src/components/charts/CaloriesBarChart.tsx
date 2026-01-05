import { BarChart, Bar, XAxis, YAxis, BarStack, Tooltip } from 'recharts';
import { useHealthMetricsContext } from '../../context/HealthMetricsContext';
import { themeColors } from '../../utils/themeColors';

const CaloriesBarChart = () => {
  const { healthMetrics } = useHealthMetricsContext();
  const calories = healthMetrics.calories;
  const data = [
    {
      name: 'Expenditure',
      BMR: calories.BMR,
      activity: calories.TDEE - calories.BMR,
    },
    {
      name: 'Recommended Intake',
      intake: calories.intake,
    },
  ];

  return (
    <BarChart
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '300px',
        maxHeight: '500px',
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
    >
      <XAxis dataKey="name" tick={false} />
      <YAxis hide width="auto" />
      <Tooltip />
      <BarStack>
        <Bar dataKey="BMR" stackId="a" fill={themeColors.red} maxBarSize={75} />
        <Bar
          dataKey="activity"
          stackId="a"
          fill={themeColors.orange}
          radius={[10, 10, 0, 0]}
          maxBarSize={75}
        />
        <Bar
          dataKey="intake"
          fill={themeColors.blue}
          radius={[10, 10, 0, 0]}
          maxBarSize={75}
        />
      </BarStack>
    </BarChart>
  );
};

export default CaloriesBarChart;
