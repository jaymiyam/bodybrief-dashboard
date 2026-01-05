import GridCellWrapper from './GridCellWrapper';
import MacronutrientsPieChart from './charts/MacronutrientsPieChart';
import { useHealthMetricsContext } from '../context/HealthMetricsContext';

const MacronutrientsCell = () => {
  const { healthMetrics } = useHealthMetricsContext();
  const macronutrients = healthMetrics.macronutrients;
  return (
    <GridCellWrapper cellClass="cell-macro" title="Recommended Macronutrients">
      <div className="mx-auto flex flex-col justify-center items-center">
        <MacronutrientsPieChart />
        <table className="max-w-56 mx-auto table-fixed w-full text-center border-separate border-spacing-1">
          <tbody>
            <tr>
              <td className="flex items-center justify-start gap-2  font-bold">
                <div className="size-4 bg-theme-green rounded-full shrink-0" />
                <span>Protein</span>
              </td>
              <td className=" text-right">{macronutrients.protein * 100}%</td>
            </tr>
            <tr>
              <td className="flex items-center justify-start gap-2  font-bold">
                <div className="size-4 bg-theme-orange rounded-full shrink-0" />
                <span>Carbs</span>
              </td>
              <td className=" text-right">{macronutrients.carbs * 100}%</td>
            </tr>
            <tr>
              <td className="flex items-center justify-start gap-2  font-bold">
                <div className="size-4 bg-theme-yellow rounded-full shrink-0" />
                <span>Fat</span>
              </td>
              <td className=" text-right">{macronutrients.fat * 100}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </GridCellWrapper>
  );
};

export default MacronutrientsCell;
