function Title({
  titleDetail,
  tagClass = "",
  titleClass = "",
  titleDetailClass = "w-90",
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
      className={`title-box flex flex-col justify-center gap-4 ${variants[titleDetail.position]} ${className}`}
    >
      {titleDetail.tag && (
        <div
          className={`title-small-tag uppercase tracking-[.20em] text-xs font-medium text-[#808080] ${commonClass} ${tagClass}`}
        >
          {titleDetail.tag}
        </div>
      )}

      <div
        className={`title-main text-5xl font-semibold ${commonClass} ${titleClass}`}
      >
        {titleDetail.title}
      </div>

      {titleDetail.titleDetail && (
        <div
          className={`title-detail tracking-right font-normal text-[#808080]  ${commonClass} ${titleDetailClass} ${titleDetail.position === "center" ? "text-justify [text-align-last:center]" : ""}`}
        >
          {titleDetail.titleDetail}
        </div>
      )}
      {children}
    </div>
  );
}

export default Title;
