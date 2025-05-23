import Empty from "../../../ui/Empty";
import Loader from "../../../ui/Loader";
import Table from "../../../ui/Table";
import useUsers from "../useUsers";
import UserRow from "./UserRow";

function UsersTable() {
    const { isLoading, users } = useUsers();

    if (isLoading) return <Loader />;
    if (!users.length) return <Empty resourceName="کاربری" />
  
    return (
      <Table>
        <Table.Header>
          <th>#</th>
          <th>نام</th>
          <th>ایمیل</th>
          <th>شماره موبایل</th>
          <th>نقش</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {users.map((user, index) => (
            <UserRow key={user._id} user={user} index={index} />
          ))}
        </Table.Body>
      </Table>
    );
}

export default UsersTable