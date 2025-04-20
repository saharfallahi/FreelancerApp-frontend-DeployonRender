import { useState } from "react";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import ChangeUserStatus from "./ChangeUserStatus";


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


function UserRow({ user, index }) {
  const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${statusStyle[user.status].className}`}>
          {statusStyle[user.status].label}
        </span>
      </td>
      <td>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`تغییر وضعیت کاربر ${user.name}`}
        >
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default UserRow;
