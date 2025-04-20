import useOutsideClick from "../hooks/useOutsideClick";

function Sidebar({ children, isOpen, onClose }) {
  const ref = useOutsideClick(onClose);

  return (
    <>
      {isOpen && (
        <div
          ref={ref}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      <div
        className={` bg-secondary-0 border-r border-gray-400 p-4
          fixed md:static md:row-start-1 md:row-span-2
          inset-y-0 right-0 z-50 w-48 md:w-64
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}
      >
        <ul className="flex flex-col gap-y-4">{children}</ul>
      </div>
    </>
  );
}

export default Sidebar;
