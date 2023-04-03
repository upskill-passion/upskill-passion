import Sidebar from "../components/Sidebar";
import Blogs from "../components/Blogs";

const BlogsPage = () => {
  return (
    <div className="flex w-full">
      <Sidebar />

      <div className="py-7 px-5 h-full flex-1">
        <div className="flex sm:flex-row sm:justify-between sm:items-center justify-center flex-col items-start gap-5 p-2">
          <p className="text-3xl font-bold text-[#3b5998]">Recent Blogs</p>

          <form className="flex items-center justify-start gap-2">
            <input
              type="search"
              id="search-blogs"
              placeholder="Search Blog"
              className="px-2 py-3 outline-none border-2 border-gray-400 rounded-md w-[200px] sm:w-auto"
            />
            <button
              type="submit"
              className="font-bold bg-[#3b5998] text-white rounded-lg border-none px-5 py-3"
            >
              Find
            </button>
          </form>
        </div>
        <Blogs />
      </div>
    </div>
  );
};
export default BlogsPage;
