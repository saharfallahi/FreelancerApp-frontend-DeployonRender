import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";

const sortOptions = [
  {
    label: "مرتب سازی (جدیدترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی (قدیمی ترین)",
    value: "earliest",
  },
];

const statusOptions=[
  {
    label:"همه",
    value:"ALL"
  },
  {
    label:"باز",
    value:"OPEN"
  },
  {
    label:"بسته",
    value:"CLOSED"
  }
]

function ProjectsHeader() {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex flex-col justify-end lg:flex-row lg:items-center lg:justify-between text-secondary-700 mb-8">
      <h1 className="text-lg md:text-xl font-black mb-4 lg:mb-0">لیست پروژه ها</h1>
      <div className="flex flex-col  md:flex-row gap-y-2 md:gap-x-4">
        <Filter filterField="status" options={statusOptions}/>
        <FilterDropDown filterField="sort" options={sortOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            { value: "ALL", label: "دسته بندی (همه)" },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
