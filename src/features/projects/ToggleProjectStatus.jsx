import useToggleProjectStatus from "./useToggleProjectStatus";
import Loader from "../../ui/Loader";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const enabled = project.status === "OPEN" ? true : false;

  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({ id: project._id, data: { status } });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loader heigth="20" width="50" />
      ) : (
        <Toggle
          label={project.status === "OPEN" ? "باز" : "بسته"}
          enabled={enabled}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
