import Empty from "../../ui/Empty";
import Loader from "../../ui/Loader";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import useProposals from "./useProposals";

function ProposalsTable() {
    const { isLoading, proposals } = useProposals();

    if (isLoading) return <Loader />;
    if (!proposals.length) return <Empty resourceName="درخواستی" />
  
    return (
      <Table>
        <Table.Header>
          <th>#</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت</th>
        </Table.Header>
        <Table.Body>
          {proposals.map((proposal, index) => (
            <ProposalRow key={proposal._id} proposal={proposal} index={index} />
          ))}
        </Table.Body>
      </Table>
    );
}

export default ProposalsTable
