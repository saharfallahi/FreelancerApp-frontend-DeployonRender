import DarkModeToggle from "./DarkModeToggle"
import Logout from "../features/authentication/Logout"

function HeaderMenu() {
  return (
    <ul className="flex gap-x-4 items-center">
      {/* <li className="flex">
        <Link to="dashboard">
        <HiOutlineUser className="w-5 h-5 text-primary-900"/>
        </Link>
      </li> */}
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="hidden md:flex">
        <Logout/>
      </li>
    </ul>
  )
}

export default HeaderMenu