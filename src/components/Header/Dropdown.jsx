function Dropdown({ children, fullWidth = true }) {
  return (
    <div
      className={`${fullWidth ? "fixed left-0 right-0 top-42 py-2 md:py-5 lg:py-10 xl:py-14 px-4 md:px-8 lg:px-15" : "absolute w-60 top-full left-0 px-2 md:px-4 lg:px-8 py-2 md:py-4 lg:py-8"} bg-white shadow-lg  opacity-0 invisible pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto z-50 cursor-default`}
    >
      {children}
    </div>
  );
}

export default Dropdown;
