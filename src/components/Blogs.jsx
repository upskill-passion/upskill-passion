import { Box } from "@mui/material";
import BlogCard from "./BlogCard";

import useBlogsData from "../hooks/useBlogsData";

const Blogs = () => {
  const { blogs, isLoading, error } = useBlogsData();
  // console.log("Blogs: ", blogs);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>{error.message}</p>;
  } else {
    content = (
      <div className="blogsgrid">
        {blogs?.map((item, idx) => (
          <Box key={idx}>
            <BlogCard blog={item} />
          </Box>
        ))}
      </div>
    );
  }
  return content;
};
export default Blogs;
