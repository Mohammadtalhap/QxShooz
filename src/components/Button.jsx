import { AiOutlineLoading } from "react-icons/ai";

function Button({
  className = "",
  text = "Shop Now",
  textUppercase = true,
  variant = "primaryBtnRed",
  size = "no",
  iconPosition = "right",
  icon,
  loading = false,
  disabled = false,
  onClick,
  href,
  textColor,
}) {
  const base = `flex items-center gap-3 w-fit font-medium transition-all duration-300 tracking-wider ${className}`;
  const variants = {
    primaryBtnRed: "bg-[#b63f4f] text-white hover:bg-[black] hover:text-white",
    primaryBtnWhite: "bg-white text-black hover:bg-[#b63f4f] hover:text-white",
    underlineBtnRed: "underline underline-offset-4 text-[#b63f4f]",
    underlineBtnWhite:
      "underline underline-offset-4 text-white hover:opacity-70",
    underlineBtnBlack:
      "underline underline-offset-4 text-black hover:text-[#b63f4f]",
    normal: "text-[#808080] hover:text-black",
    noVariant: "",
  };
  const sizes = {
    no: "text-sm",
    xs: "px-2 py-1 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-3 text-md",
    xl: "px-10 py-3 text-lg",
  };
  const isDisabled = disabled || loading;

  const classes = [
    base,
    textUppercase && "uppercase",
    variants[variant],
    sizes[size],
    textColor && "text-" + textColor,
    isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && (
        <span className="animate-spin">
          <AiOutlineLoading />
        </span>
      )}
      {!loading && icon && iconPosition === "left" && icon}
      {text}
      {!loading && icon && iconPosition === "right" && icon}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {" "}
        {content}{" "}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={isDisabled}>
      {content}
    </button>
  );
}

export default Button;
