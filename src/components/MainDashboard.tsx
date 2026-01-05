import UserFormCell from './UserFormCell';
import BMICell from './BMICell';
import CaloriesCell from './CaloriesCell';
import MacronutrientsCell from './MacronutrientsCell';
import HeartRateZoneCell from './HeartRateZoneCell';
import IdealWeightRangeCell from './IdealWeightRangeCell';

const MainDashboard = () => {
  return (
    <section className="dashboard-grid">
      <UserFormCell />
      <BMICell />
      <CaloriesCell />
      <MacronutrientsCell />
      <HeartRateZoneCell />
      <IdealWeightRangeCell />
    </section>
  );
};

export default MainDashboard;
