function RadioInput({
  name,
  id,
  value,
  label,
  register,
  validationSchema,
  errors,
  watch
}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:text-primary-900  "
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
      />
      <label htmlFor={id} className="text-sm md:text-base">{label}</label>
     
    </div>
  );
}

export default RadioInput;
