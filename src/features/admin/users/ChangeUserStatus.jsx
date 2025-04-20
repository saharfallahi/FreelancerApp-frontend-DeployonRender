import { useForm } from "react-hook-form";
import RHFSelect from "../../../ui/RHFSelect";
import Loader from "../../../ui/Loader";
import useChangeUserStatus from "./UseChangeUserStatus";
import { useQueryClient } from "@tanstack/react-query";


const options = [
    {
      label: "رد شده",
      value: 0,
    },
    {
      label: "در انتظار تایید",
      value: 1,
    },
    {
      label: "تایید شده",
      value: 2,
    },
  ];


function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { changeUserStatus, isUpdating } = useChangeUserStatus();
  const queryClient=useQueryClient()

  const onSubmit = (data) => {
    changeUserStatus({userId,data},{
        onSuccess: () => {
            onClose();
            queryClient.invalidateQueries({ queryKey: ["users"] });
          },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="تغییر وضعیت کاربر"
          register={register}
          options={options}
          required
        />
        <div className="mt-8">
          {isUpdating ? (
            <Loader />
          ) : (
            <button className="btn btn--primary w-full">تایید</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeUserStatus;
