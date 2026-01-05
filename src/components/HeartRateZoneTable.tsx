import type { HeartRateZones } from '../types/healthMetricsTypes';

const HeartRateZoneTable = ({ hrz }: { hrz: HeartRateZones }) => {
  return (
    <table className="border-separate border-spacing-x-4">
      <tbody>
        <tr>
          <td className="">
            <p className="text-3xl font-medium text-center">
              {hrz.zone5.min}~{hrz.zone5.max}
            </p>
          </td>
          <td>
            <p className="font-bold">Zone 5 (Maximum)</p>
            <p className="">Maximize performance</p>
          </td>
        </tr>
        <tr>
          <td>
            <p className="text-3xl font-medium text-center">
              {hrz.zone4.min}~{hrz.zone4.max}
            </p>
          </td>
          <td>
            <p className="font-bold">Zone 4 (Hard)</p>
            <p className="">Pace & speed building</p>
          </td>
        </tr>
        <tr>
          <td>
            <p className="text-3xl font-medium text-center">
              {hrz.zone3.min}~{hrz.zone3.max}
            </p>
          </td>
          <td>
            <p className="font-bold">Zone 3 (Moderate)</p>
            <p className="">Aerobic fitness building</p>
          </td>
        </tr>
        <tr>
          <td>
            <p className="text-3xl font-medium text-center">
              {hrz.zone2.min}~{hrz.zone2.max}
            </p>
          </td>
          <td>
            <p className="font-bold">Zone 2 (Light)</p>
            <p className="">Endurance & fat burning</p>
          </td>
        </tr>
        <tr>
          <td>
            <p className="text-3xl font-medium text-center">
              {hrz.zone1.min}~{hrz.zone1.max}
            </p>
          </td>
          <td>
            <p className="font-bold">Zone 1 (Very Light)</p>
            <p className="">Warm up & recovery</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default HeartRateZoneTable;
