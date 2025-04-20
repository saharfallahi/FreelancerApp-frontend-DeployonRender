import { useNavigate } from "react-router-dom";
import Navbar from "../ui/Navbar";

function Home() {
  const navigate = useNavigate();
  return (
    <div className=" flex min-h-screen bg-secondary-100">
      <div className="container xl:max-w-screen-xl mx-auto my-auto">
        <Navbar />
        <main className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-secondary-700 mb-8 ">
            به آسانی پروژه ثبت کنید و پروژه بگیرید
          </h1>
          <h2 className="text-secondary-500 ">
            مطمئن ترین بستر ارتباطی میان فریلنسرها و کارفرمایان
          </h2>
          <button
            onClick={() => navigate("/auth")}
            className="btn btn--primary mt-16"
          >
            برای شروع کلیک کنید
          </button>
        </main>
      </div>
    </div>
  );
}

export default Home;
