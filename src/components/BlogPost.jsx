import { FaRegCommentDots } from "react-icons/fa";

function BlogPost({ post, postType = "outsideContent", hoverText = true }) {
  let className,
    wrapperClass,
    contentClass,
    hasOverlay = false;

  if (postType === "outsideContent") {
    className = "flex gap-5";
    wrapperClass = "aspect-3/2";
    hasOverlay = false;
    contentClass = "justify-center";
  } else if (postType === "insideContent") {
    className = "w-full text-white mr-2";
    wrapperClass = "w-full";
    hasOverlay = true;
    contentClass = "absolute left-10 bottom-10";
  }

  return (
    <div className={`group relative h-full ${className}`}>
      <a href="#" className={`img-wrapper block h-full overflow-hidden ${wrapperClass}`}>
        <img
          src={post.imageSrc}
          alt={post.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </a>
      {hasOverlay && (
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/10"></div>
      )}

      <div className={`flex flex-col gap-4 ${contentClass}`}>
        <div className="header-box flex gap-8">
          <p className="date">{post.dateOfPublished}</p>
          <p className="comments flex gap-2 items-center">
            {" "}
            <FaRegCommentDots />
            {post.noOfComments} comments
          </p>
        </div>
        <a
          href="#"
          className={`title-box text-2xl font-semibold ${hoverText ? "transition-colors duration-300 hover:text-[#b63f4f]" : ""}`}
        >
          {post.title}
        </a>
      </div>
    </div>
  );
}

export default BlogPost;
