
function Section({ children, className = "", fullWidth = false }) {
  return (
    <section
      className={`
        ${fullWidth ? "" : "px-6 md:px-10 lg:px-12 xl:px-15"}
        ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
