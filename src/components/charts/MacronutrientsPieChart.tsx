import { useHealthMetricsContext } from '../../context/HealthMetricsContext';
import { PieChart, Cell, Pie, Tooltip } from 'recharts';
import type { MacronutrientsRatio } from '../../types/healthMetricsTypes';
import { themeColors } from '../../utils/themeColors';

const MacronutrientsPieChart = () => {
  const { healthMetrics } = useHealthMetricsContext();
  const macronutrients = healthMetrics.macronutrients;

  const colors = [themeColors.green, themeColors.orange, themeColors.yellow];
  const data = Array.from(Object.keys(macronutrients), (el, i) => {
    return {
      name: el,
      value: macronutrients[el as keyof MacronutrientsRatio],
      color: colors[i],
    };
  });
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
        {data.map((entry) => {
          return <Cell key={`cell-${entry.name}`} fill={entry.color} />;
        })}
      </Pie>
    </PieChart>
  );
};

export default MacronutrientsPieChart;
