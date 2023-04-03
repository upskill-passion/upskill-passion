import useSWR from "swr";
import { getBlogs, blogsUrlEndpoint as cacheKey } from "../api/blogsApi";

const useBlogsData = () => {
  const { isLoading, error, data } = useSWR(cacheKey, getBlogs);
  return {
    blogs: data,
    isLoading,
    error,
  };
};

export default useBlogsData;
