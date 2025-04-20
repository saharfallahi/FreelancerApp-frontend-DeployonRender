import { Outlet } from "react-router-dom";

function AppLayot({children}) {
  return (
    <div className="min-h-screen md:grid md:grid-rows-[auto_1fr] md:grid-cols-[15rem_1fr] bg-secondary-100">
     {children}
      <div className=" p-4 md:p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayot;
