import FiltersData from "../data/FiltersData";
import FilterSection from "./FilterSection";

function SidebarFilters({ filtersMenu = true }) {
  const filtersData = [...FiltersData];
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-medium">Filter:</h1>
      {filtersData.map((filter) => (
        <FilterSection key={filter.id} data={filter} />
      ))}
    </div>
  );
}

export default SidebarFilters;
