import { HiArrowRight } from "react-icons/hi2";
import { useMoveBack } from "../../hooks/useMoveBack";

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();
  return (
    <div className="flex items-center gap-x-4 mb-8 ">
      <button onClick={moveBack} >
        <HiArrowRight className="w-5 h-5 md:w-6 md:h-6 text-primary-900"/>
      </button>
      <h1 className="text-md md:text-xl font-black text-secondary-700">
        لیست درخواست های {project.title}
      </h1>
    </div>
  );
}

export default ProjectHeader;
