
import DashboardHeader from "../../ui/DashboardHeader";
import Loader from "../../ui/Loader";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";

function DashboardLayout() {
    const { isLoading,proposals} = useProposals();
  
    if (isLoading) return <Loader />;
    
    return (
      <div>
        <DashboardHeader/>
        <Stats proposals={proposals} />
      </div>
    );
  }
  
  export default DashboardLayout;

