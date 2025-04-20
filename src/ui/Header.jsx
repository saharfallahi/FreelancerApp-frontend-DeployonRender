import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";

function Header({ onMenuClick }) {
  const { isLoading } = useUser();

  return (
    <div className="bg-secondary-0 py-4 px-4 md:px-8 border-b border-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-between md:justify-end gap-x-8 
          ${isLoading ? "blur-sm" : ""}`}
      >
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="md:hidden text-secondary-500 p-2 rounded-md hover:bg-secondary-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="md:w-full flex flex-row-reverse md:flex-row items-center justify-between gap-x-8">
          <UserAvatar />
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;


