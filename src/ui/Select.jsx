
function Select({value,onChange,options}) {
  return (
    <select value={value} onChange={onChange} className="textField__input bg-secondary-0 border border-secondary-200 py-2 text-xs">
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

export default Select