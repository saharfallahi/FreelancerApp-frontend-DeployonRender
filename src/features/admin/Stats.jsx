import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ proposals, projects, users }) {
  const numOfProposals = proposals.length;
  const numOfProjects = projects.length;
  const numOfUsers = users.length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-8">
      <Stat
        title="کاربران"
        value={numOfUsers}
        icon={<HiUser className="w-12 h-12 md:w-20 md:h-20" />}
        color="green"
      />
      <Stat
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiCollection className="w-12 h-12 md:w-20 md:h-20" />}
        color="red"
      />
      <Stat
        title="پروژه ها"
        value={numOfProjects}
        icon={<HiOutlineViewGrid className="w-12 h-12 md:w-20 md:h-20" />}
        color="primary"
      />
    </div>
  );
}

export default Stats;
