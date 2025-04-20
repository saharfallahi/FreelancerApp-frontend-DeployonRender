import { useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";
import RHFTextField from "../../ui/RHFTextField";

function SendOTPForm({ register,isSendingOtp,onSubmit }) {
  
  const navigate=useNavigate()



  return (
    <div className="flex flex-col gap-y-8">
      <form className="space-y-10" onSubmit={onSubmit}>
        <RHFTextField
        register={register}
          name="phoneNumber"
          label="شماره موبایل"
        />
        <div>
          {isSendingOtp ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
      <button onClick={()=>navigate("/")} className="text-sm md:text-base text-secondary-700">صفحه اصلی</button>
    </div>
  );
}

export default SendOTPForm;
