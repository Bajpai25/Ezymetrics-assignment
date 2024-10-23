import Widgets from "./Widgets";
import Leads from "../Leads/Leads";

const Dashboard = () => {
    return (
      <div className="flex flex-col gap-6">
        <Widgets />
        <Leads />
      </div>
    );
  };

  export default Dashboard