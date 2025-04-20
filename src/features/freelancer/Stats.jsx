import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import toPersianNumbersWithComma from "../../utils/toPersianNumbers";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => curr.price + acc, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-x-8">
      <Stat
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiOutlineViewGrid className="w-12 h-12 md:w-20 md:h-20" />}
        color="primary"
      />
      <Stat
        title="درخواست های تاییدشده"
        value={acceptedProposals.length}
        icon={<HiCurrencyDollar className="w-12 h-12 md:w-20 md:h-20" />}
        color="green"
      />
      <Stat
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        icon={<HiCollection className="w-12 h-12 md:w-20 md:h-20" />}
        color="red"
      />
    </div>
  );
}

export default Stats;
