
function RHFTexterea({ label, name, register, required ,  validationSchema,errors }) {
  return (
    <div>
    <label className="text-sm md:text-base mb-2 block text-secondary-700" htmlFor={name}>
      {label} {required && <span className="text-error">*</span>}
    </label>
    <textarea rows="5" cols="33" 
      {...register(name, validationSchema)}
      className="textField__input resize-none"
      id={name}
      autoComplete="off"
    />
    {errors && errors[name] && <span className="text-error block text-sm mt-2 ">{errors[name]?.message}</span>}
    
  </div>
  )
}

export default RHFTexterea