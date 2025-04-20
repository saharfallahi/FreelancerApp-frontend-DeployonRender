import { TagsInput } from "react-tag-input-component";
import RHFSelect from "../../ui/RHFSelect";
import RHFTextField from "../../ui/RHFTextField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import useEditProject from "./useEditProject";
import Loader from "../../ui/Loader";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline ||""));

  const { categories } = useCategories();
  const { createProject, isCreating } = useCreateProject();
  const { editProject, isEditing } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject({id:editId,newProject},{
        onSuccess:()=>{
          onClose();
          reset();
        }
      });
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        register={register}
        label="عنوان"
        name="title"
        required
        validationSchema={{
          required: "عنوان ضروری است",
          maxLength: {
            value: 20,
            message: "طول عنوان حداکثر 20 کاراکتر می باشد",
          },
          minLength: {
            value: 10,
            message: "طول عنوان حداقل 10 کاراکتر می باشد",
          },
        }}
        errors={errors}
      />
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
        label="بودجه"
        name="budget"
        required
        validationSchema={{
          required: "بودجه ضروری است",
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        register={register}
        options={categories}
        required
      />
      <div className="text-sm md:text-base">
        <label className=" mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />

      <div className="!mt-8">
        {isCreating ||isEditing ? (
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

export default CreateProjectForm;
