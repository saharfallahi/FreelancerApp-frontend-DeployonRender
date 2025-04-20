import { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isAuthorized, isLoading, isVerified } =
    useAuthorize();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است");
      navigate("/");
    }
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isVerified, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center  bg-secondary-100">
        <Loader />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
