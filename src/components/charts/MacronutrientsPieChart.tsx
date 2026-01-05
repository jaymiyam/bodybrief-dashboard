import { useHealthMetricsContext } from '../../context/HealthMetricsContext';
import { PieChart, Cell, Pie, Tooltip } from 'recharts';
import type { MacronutrientsRatio } from '../../types/healthMetricsTypes';
import { themeColors } from '../../utils/themeColors';

const MacronutrientsPieChart = () => {
  const { healthMetrics } = useHealthMetricsContext();

  const data = Array.from(Object.keys(healthMetrics.macronutrients), (el) => {
    return {
      name: el,
      value: healthMetrics.macronutrients[el as keyof MacronutrientsRatio],
    };
  });
  const colors = [themeColors.green, themeColors.orange, themeColors.yellow];
  return (
    <PieChart
      style={{
        width: '100%',
        maxWidth: '300px',
        maxHeight: '300px',
        aspectRatio: 1,
      }}
      responsive
    >
      <Tooltip />
      <Pie
        data={data}
        dataKey="value"
        outerRadius="100%"
        cornerRadius="10%"
        // label={renderCustomizedLabel}
        labelLine={false}
      >
        {data.map((entry, index) => {
          return <Cell key={`cell-${entry.name}`} fill={colors[index]} />;
        })}
      </Pie>
    </PieChart>
  );
};

export default MacronutrientsPieChart;
