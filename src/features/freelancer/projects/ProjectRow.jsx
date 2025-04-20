import { MdAssignment } from "react-icons/md";
import Table from "../../../ui/Table";
import toPersianNumbersWithComma from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import toLocalDateShort from "../../../utils/toLocalDataShort";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import CreateProposal from "../../proposals/CreateProposal";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ project, index }) {
  const { title, budget, deadline, status } = project;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <button onClick={() => setOpen(true)}>
          <MdAssignment className="w-5 h-5 text-primary-900" />
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`درخواست انجام پروژه ${title}`}
        >
            <CreateProposal onClose={()=>setOpen(false)} projectId={project._id}/>
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
