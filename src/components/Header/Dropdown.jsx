
function Dropdown({ children }) {
  return (
    <div className="fixed left-0 right-0 top-42 bg-white shadow-lg py-2 md:py-5 lg:py-10 xl:py-14 px-4 md:px-8 lg:px-15 opacity-0 invisible pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto z-50 cursor-default">
      {children}
    </div>
  );
}

export default Dropdown;
