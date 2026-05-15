import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { borderAnimation, createSlug } from "../utils/styles";

function FilterSection({ filter, selectedFilters, toggleFilter }) {
  const defaultType = filter.type ? false : true;
  return (
    <div className="filter-section border-t pt-5">
      {/* Header */}
      <button className="filter-header flex justify-between items-center w-full cursor-pointer">
        <span className="font-medium">{filter.title}</span>
        <span className="">
          <MdOutlineKeyboardArrowDown />
        </span>
      </button>

      {/* Content */}
      {defaultType && (
        <div className="filter-content mt-3 space-y-1">
          {filter.options.map((option, index) => (
            <label
              key={index}
              htmlFor={option}
              className="flex items-center gap-2 w-fit cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedFilters[filter.filterKey].includes(option)}
                onChange={() => toggleFilter(filter.filterKey, option)}
                id={option}
                className="h-4 w-4"
              />
              <span className="capitalize">{option}</span>
            </label>
          ))}
        </div>
      )}

      {!defaultType && filter.type === "link" && (
        <div className="filter-content flex flex-col mt-3 space-y-1">
          {filter.options.map((option, index) => (
            <Link
              key={index}
              to={`/products/${createSlug(option)}`}
              className={`${borderAnimation} from-black to-black w-fit`}
            >
              {option} <span className="text-gray-500">({8})</span>
            </Link>
          ))}
        </div>
      )}

      {!defaultType && filter.type === "range" && (
        <div className="filter-content mt-3 space-y-1">
          <input type="range" className="w-full" />
          <div className="flex gap-5 nk-400 mt-2">
            <div className="box-wrapper flex items-center gap-2">
              <span className="">$</span>
              <input
                type="number"
                placeholder="0"
                className="w-full border p-1 border-gray-500"
              />
            </div>
            <div className="box-wrapper flex items-center gap-2">
              <span className="">$</span>
              <input
                type="number"
                placeholder="25.00"
                className="w-full border p-1 border-gray-500"
              />
            </div>
          </div>
        </div>
      )}

      {!defaultType && filter.type === "box" && (
        <div className="filter-content my-4 flex gap-3">
          {filter.options.map((option, index) => (
            <label
              key={index}
              htmlFor={option}
              className="size-option cursor-pointer"
            >
              <input
                type="checkbox"
                className="peer hidden"
                id={option}
                name="size"
                value={option.toLowerCase()}
                checked={selectedFilters[filter.filterKey].includes(option)}
                onChange={() => toggleFilter(filter.filterKey, option)}
                hidden
              />
              <span className="w-8 h-8 flex justify-center items-center border border-gray-500 peer-checked:border-black 
              peer-checked:border-2 transition-all">
                {option.charAt(0).toUpperCase()}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterSection;
