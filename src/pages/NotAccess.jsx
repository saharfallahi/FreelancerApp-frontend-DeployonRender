import { HiArrowRight } from "react-icons/hi";
import { useMoveBack } from "../hooks/useMoveBack";

function NotAccess() {
  const moveBack = useMoveBack();

  return (
    <div className="min-h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10 ">
          <div>
            <h1 className="text-lg md:text-xl font-black text-secondary-700 mb-8">
              شما به این بخش دسترسی ندارید
            </h1>
            <button onClick={moveBack} className="flex items-center gap-x-2">
              <HiArrowRight className="w-6 h-6 text-primary-900" />
              <span className="text-secondary-500">برگشت</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotAccess;
