import GridCellWrapper from './GridCellWrapper';
import HeartRateZonesBarChart from './charts/HeartRateZonesBarChart';
import { useHealthMetricsContext } from '../context/HealthMetricsContext';
import HeartRateZoneData from './HeartRateZoneData';

const HeartRateZoneCell = () => {
  const { healthMetrics } = useHealthMetricsContext();
  const hrz = healthMetrics.heartRateZones;

  return (
    <GridCellWrapper
      cellClass="cell-hrz flex flex-col"
      title="Heart Rate Zones (in bpm)"
      titleId="heart-rate-zones-title"
    >
      <div className="h-full flex gap-2">
        <HeartRateZonesBarChart />
        <HeartRateZoneData hrz={hrz} />
      </div>
    </GridCellWrapper>
  );
};

export default HeartRateZoneCell;
