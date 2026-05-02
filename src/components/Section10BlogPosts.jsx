import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import BlogPost from "./BlogPost";
import blogPostsData from "../data/BlogPostsData";

function Section10BlogPosts() {
  const posts = [...blogPostsData];
  return (
    <div className="grid grid-cols-2 grid-rows-3 h-120 gap-5">
      {posts.map((post, index) => {
        let postType = "outsideContent";
        let rowSpan = "";
        let hoverText = true;
        if (index === 0) {
          ((postType = "insideContent"), (rowSpan = "row-span-3"));
        }
        if(postType === "insideContent") hoverText = false;
        return (
          <div key={index} className={`flex ${rowSpan}`}>
            <BlogPost post={post} postType={postType} hoverText={hoverText} />
          </div>
        );
      })}
    </div>
  );
}

export default Section10BlogPosts;
