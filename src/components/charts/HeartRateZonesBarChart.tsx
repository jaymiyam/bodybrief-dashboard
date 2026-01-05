import { useHealthMetricsContext } from '../../context/HealthMetricsContext';
import { transformHRZforChart } from '../../utils/healthMetricsFormulas';
import { BarChart, Bar, BarStack, XAxis, YAxis, Tooltip } from 'recharts';
import { themeColors } from '../../utils/themeColors';

const HeartRateZonesBarChart = () => {
  const { healthMetrics } = useHealthMetricsContext();
  const data = transformHRZforChart(healthMetrics.heartRateZones);
  return (
    <BarChart
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '80px',
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
    >
      <XAxis dataKey="name" hide />
      <YAxis
        domain={[
          healthMetrics.heartRateZones.zone1.min,
          healthMetrics.heartRateZones.zone5.max,
        ]}
        width={50}
        hide
      />
      <Tooltip />
      <BarStack radius={10}>
        <Bar dataKey="zone1" maxBarSize={60} fill={themeColors.cyan} />
        <Bar dataKey="zone2" maxBarSize={60} fill={themeColors.green} />
        <Bar dataKey="zone3" maxBarSize={60} fill={themeColors.yellow} />
        <Bar dataKey="zone4" maxBarSize={60} fill={themeColors.orange} />
        <Bar dataKey="zone5" maxBarSize={60} fill={themeColors.red} />
      </BarStack>
    </BarChart>
  );
};

export default HeartRateZonesBarChart;
