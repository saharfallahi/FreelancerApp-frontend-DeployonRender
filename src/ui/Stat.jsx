import { toPersianNumbers } from "../utils/toPersianNumbers"

const colors={
    primary: "bg-primary-100 text-primary-700",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",

}

function Stat({icon,value,title,color}) {
  return (
    <div className="col-span-1 grid grid-rows-2 grid-cols-[4.4rem_1fr] md:grid-cols-[6.4rem_1fr] bg-secondary-0 p-4 rounded-lg gap-x-4">
    <div className={`row-span-2 flex items-center justify-center p-2 aspect-square rounded-full bg-primary-100 ${colors[color]}`}>
      {icon}
    </div>
    <h5 className="font-bold text-secondary-500 text-base md:text-lg self-center">
      {title}
    </h5>
    <p className="text-xl md:text-3xl font-bold text-secondary-900">{toPersianNumbers(value)}</p>
  </div>
  )
}

export default Stat