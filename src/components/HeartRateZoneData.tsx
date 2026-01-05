import type { HeartRateZones } from '../types/healthMetricsTypes';

const HeartRateZoneData = ({ hrz }: { hrz: HeartRateZones }) => {
  return (
    <ul className="h-full w-full grid grid-cols-[40%_60%] gap-y-2 md:gap-y-0 gap-x-2 items-center">
      <li className="contents">
        <p
          className="text-2xl md:text-3xl font-medium text-center"
          aria-label={`heart rate ${hrz.zone5.min} to ${hrz.zone5.max} beats per minute`}
        >
          {hrz.zone5.min}~{hrz.zone5.max}
        </p>
        <div className="text-sm md:text-base">
          <h4 className="font-bold">Zone 5 (Maximum)</h4>
          <p className="">Maximize performance</p>
        </div>
      </li>
      <li className="contents">
        <p
          className="text-2xl md:text-3xl font-medium text-center"
          aria-label={`heart rate ${hrz.zone4.min} to ${hrz.zone4.max} beats per minute`}
        >
          {hrz.zone4.min}~{hrz.zone4.max}
        </p>
        <div className="text-sm md:text-base">
          <h4 className="font-bold">Zone 4 (Hard)</h4>
          <p className="">Pace & speed building</p>
        </div>
      </li>
      <li className="contents">
        <p
          className="text-2xl md:text-3xl font-medium text-center"
          aria-label={`heart rate ${hrz.zone3.min} to ${hrz.zone3.max} beats per minute`}
        >
          {hrz.zone3.min}~{hrz.zone3.max}
        </p>
        <div className="text-sm md:text-base">
          <h4 className="font-bold">Zone 3 (Moderate)</h4>
          <p className="">Aerobic fitness building</p>
        </div>
      </li>
      <li className="contents">
        <p
          className="text-2xl md:text-3xl font-medium text-center"
          aria-label={`heart rate ${hrz.zone2.min} to ${hrz.zone2.max} beats per minute`}
        >
          {hrz.zone2.min}~{hrz.zone2.max}
        </p>
        <div className="text-sm md:text-base">
          <h4 className="font-bold">Zone 2 (Light)</h4>
          <p className="">Endurance & fat burning</p>
        </div>
      </li>
      <li className="contents">
        <p
          className="text-2xl md:text-3xl font-medium text-center"
          aria-label={`heart rate ${hrz.zone1.min} to ${hrz.zone1.max} beats per minute`}
        >
          {hrz.zone1.min}~{hrz.zone1.max}
        </p>
        <div className="text-sm md:text-base">
          <h4 className="font-bold">Zone 1 (Very Light)</h4>
          <p className="">Warm up & recovery</p>
        </div>
      </li>
    </ul>
  );
};

export default HeartRateZoneData;
