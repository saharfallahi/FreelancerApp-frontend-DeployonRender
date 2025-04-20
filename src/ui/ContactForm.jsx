import { useForm } from "react-hook-form";
import RHFTextField from "./RHFTextField";
import RHFTexterea from "./RHFTexterea";
import toast from "react-hot-toast";
// import RHFTextField from "../ui/RHFTextField";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("فرم تماس شما با موفقیت ثبت شد");
    reset();
  };
  return (
    <div className="flex flex-col gap-y-6 items-center">
      <h1 className="font-bold text-xl md:text-3xl text-secondary-700 mt-28 md:mt-40">
        تماس با ما
      </h1>
      <div className="w-full sm:max-w-sm mb-8">
        <form className="space-y-10 " onSubmit={handleSubmit(onSubmit)}>
          <RHFTextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            validationSchema={{
              required: "نام و نام خانوادگی ضروری است",
            }}
            errors={errors}
            reset={reset}
          />
          <RHFTextField
            label="ایمیل"
            name="email"
            register={register}
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
            errors={errors}
            reset={reset}
          />

          <RHFTexterea
            label="توضیحات"
            name="description"
            register={register}
            validationSchema={{
              required: "توضیحات ضروری است",
            }}
            errors={errors}
            reset={reset}
          />
          <button className="btn btn--primary w-full">ارسال</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
