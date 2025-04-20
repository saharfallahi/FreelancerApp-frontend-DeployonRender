import useLogout from "./useLogout";
import Loader from "../../ui/Loader";
import { HiOutlineLogout } from "react-icons/hi";

function Logout() {
  const { logout, isPending } = useLogout();
  return isPending ? (
    <Loader />
  ) : (
    <button onClick={logout} className="flex items-center gap-x-2 text-secondary-500 hover:text-error">
      <HiOutlineLogout className="w-5 h-5 rotate-180" />
      <span className="block md:hidden text-sm md:text-base">خروج</span>

    </button>
  );
}

export default Logout;
