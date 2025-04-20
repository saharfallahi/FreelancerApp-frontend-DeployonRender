import Loader from "../../ui/Loader";
import useOwnerProjects from "../projects/useOwnerProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loader />;
  
  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default DashboardLayout;
