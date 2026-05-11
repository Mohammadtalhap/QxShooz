function Title({
  titleDetail,
  tagClass = "",
  titleClass = "",
  titleDetailClass = "xl:w-90",
  commonClass = "",
  className = "",
  children = "",
}) {
  const variants = {
    left: "items-start text-left",
    center: "items-center",
    right: "items-end text-right",
  };

  return (
    <div
      className={`title-box flex flex-col justify-center gap-2 sm:gap-3 lg:gap-4 ${variants[titleDetail.position]} ${className}`}
    >
      {titleDetail.tag && (
        <div
          className={`title-small-tag uppercase tracking-[.20em] text-xs sm:text-xs lg:text-xs font-medium text-[#808080] ${commonClass} ${tagClass}`}
        >
          {titleDetail.tag}
        </div>
      )}

      <div
        className={`title-main text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold ${commonClass} ${titleClass}`}
      >
        {titleDetail.title}
      </div>

      {titleDetail.titleDetail && (
        <div
          className={`title-detail tracking-right font-normal text-[#808080] text-xs sm:text-sm md:text-base ${commonClass} ${titleDetailClass} ${titleDetail.position === "center" ? "text-justify [text-align-last:center]" : ""}`}
        >
          {titleDetail.titleDetail}
        </div>
      )}
      {children}
    </div>
  );
}

export default Title;
