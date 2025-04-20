import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loader from "../../ui/Loader";
import useProposals from "../proposals/useProposals";
import useUsers from "./useUsers";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading: isLoadingProjects, projects } = useProjects();
  const { isLoading: isLoadingProposals, proposals } = useProposals();
  const { isLoading: isLoadingUsers, users } = useUsers();
  if (isLoadingProjects || isLoadingProposals || isLoadingUsers)
    return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} proposals={proposals} users={users} />
    </div>
  );
}

export default DashboardLayout;
