import ProposalsTable from "../features/proposals/ProposalsTable";

function Proposals() {
  return (
    <div>
      <h1 className="text-lg md:text-xl font-black text-secondary-700 mb-8  ">
        لیست درخواست ها 
      </h1>
      <ProposalsTable />
    </div>
  );
}

export default Proposals;
