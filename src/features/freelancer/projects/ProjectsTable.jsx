import Loader from "../../../ui/Loader";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectRow";
import useProjects from "../../../hooks/useProjects";
import Empty from "../../../ui/Empty";

function ProjectsTable() {
  const { projects, isLoading } = useProjects();

  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty resourceName="پروژه ای" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
