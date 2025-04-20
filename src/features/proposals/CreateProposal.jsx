import { useForm } from "react-hook-form";
import RHFTextField from "../../ui/RHFTextField";
import Loader from "../../ui/Loader";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ onClose, projectId }) {
  const { createProposal, isCreating } = useCreateProposal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: onClose(),
      }
    );
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        register={register}
        label="توضیحات"
        name="description"
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          maxLength: {
            value: 100,
            message: "طول توضیحات حداکثر 50 کاراکتر می باشد",
          },
          minLength: {
            value: 10,
            message: "طول توضیحات حداقل 10 کاراکتر می باشد",
          },
        }}
        errors={errors}
      />
      <RHFTextField
        register={register}
        label="قیمت"
        name="price"
        type="number"
        required
        validationSchema={{
          required: "قیمت ضروری است",
        }}
        errors={errors}
      />
      <RHFTextField
        register={register}
        label="مدت زمان"
        name="duration"
        type="number"
        required
        validationSchema={{
          required: "مدت زمان ضروری است",
        }}
        errors={errors}
      />

      <div className="mt-8">
        {isCreating ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProposal;
