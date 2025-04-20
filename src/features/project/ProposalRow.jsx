import { useState } from "react";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function ProposalRow({ proposal, index }) {
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>{truncateText(proposal.description, 50)}</td>
      <td>{proposal.duration}</td>
      <td>{proposal.price}</td>
      <td>
        <span className={`badge ${statusStyle[proposal.status].className}`}>
          {statusStyle[proposal.status].label}
        </span>
      </td>
      <td>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`تغییر وضعیت درخواست ${proposal.user.name}`}
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
