import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import Loader from "../../ui/Loader";

const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return navigate("/complete-profile");
      if (Number(user.status) !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است",  {icon: '👏'});
        return;
      }
      if (user.role === "OWNER") navigate("/owner");
      if (user.role === "FREELANCER") navigate("/freelancer");
      if (user.role === "ADMIN") navigate("/admin");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <button>
        <HiArrowRight onClick={onBack} className="w-5 h-5 md:w-6 md:h-6 text-secondary-500" />
      </button>
      {otpResponse && (
        <p className="text-sm md:text-base flex items-center gap-x-2 my-4 text-secondary-700">
          <span>{otpResponse?.message}</span>
          <button onClick={onBack}>
            <CiEdit className="w-6 h-6 text-primary-900" />
          </button>
        </p>
      )}
      <div className="text-sm md:text-base mb-4 text-secondary-500">
        {time > 0 ? (
          <div>{time} ثانیه تا ارسال مجدد کد</div>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد</button>
        )}
      </div>
      <form className="space-y-10" onSubmit={checkOtpHandler}>
        <p className="font-bold text-sm md:text-base text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center  "
          inputStyle={{
            width: "1.8rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-400))",
            borderRadius: "0.5rem",
          }}
        />

        <div>
          {isPending ? (
            <Loader />
          ) : (
            <button className="btn btn--primary w-full">تایید</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
