import { TbPencilMinus } from "react-icons/tb";
import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDataShort";
import toPersianNumbersWithComma from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { HiEye, HiOutlineTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import { useState } from "react";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";
import ConfirmDelete from "../../ui/ConfirmDelete";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject } = useRemoveProject();

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name}</td>
      <td>
        <ToggleProjectStatus project={project} />
        {/* {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )} */}
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <button onClick={() => setIsEditOpen(true)}>
            <TbPencilMinus className="w-5 h-5 text-primary-900" />
          </button>
          <Modal
            open={isEditOpen}
            title={`ویرایش پروژه ${project.title}`}
            onClose={() => setIsEditOpen(false)}
          >
            <CreateProjectForm
              projectToEdit={project}
              onClose={() => setIsEditOpen(false)}
            />
          </Modal>
          <button onClick={() => setIsDeleteOpen(true)}>
            <HiOutlineTrash className="w-5 h-5 text-error" />
          </button>
          <Modal
            open={isDeleteOpen}
            title={`حذف پروژه ${project.title}`}
            onClose={() => setIsDeleteOpen(false)}
          >
            <ConfirmDelete
              resourceName={project.title}
              onConfirm={() =>
                removeProject(project._id, {
                  onSuccess: () => setIsDeleteOpen(false),
                })
              }
              onClose={() => setIsDeleteOpen(false)}
              disabled={false}
            />
          </Modal>
        </div>
      </td>
      <td>
        <Link to={project._id} className="flex justify-center">
          <HiEye className="w-5 h-5 text-primary-800"/>
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
