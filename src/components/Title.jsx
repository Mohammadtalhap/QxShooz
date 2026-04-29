function Title({ titleDetail }) {
  const variants = {
    left: "items-left",
    center: "items-center",
    right: "items-right",
  };

  return (
    <div
      className={`title-box flex flex-col justify-center gap-4 ${variants[titleDetail.position]}`}
    >
      {titleDetail.tag && (
        <div className="title-small-tag uppercase tracking-widest text-xs font-medium text-[#808080]">
          {titleDetail.tag}
        </div>
      )}

      <div className="title-main text-5xl font-semibold">
        {titleDetail.title}
      </div>

      {titleDetail.titleDetail && (
        <div
          className={`title-detail w-90 tracking-right font-normal text-[#808080] ${titleDetail.position === "center" ? "[text-align:justify] [text-align-last:center]" : ""}`}
        >
          {titleDetail.titleDetail}
        </div>
      )}
    </div>
  );
}

export default Title;
