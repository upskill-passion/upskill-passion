import { useParams } from "react-router-dom";
// import {
//   BsBookmarkCheckFill,
//   BsBookmarkCheck,
//   BsArrowUpRight,
// } from "react-icons/bs";

const BlogDescription = () => {
  const { blogId } = useParams();

  const [blogsData, setBlogsData] = useState([]);
  const effectRan = useRef(false);

  useEffect(() => {
    // console.log("unmounted");
    if (effectRan.current === false) {
      const getBlogsData = async () => {
        const response = await axios.get("/blogs");
        console.log("Blogs Data: ", response.data);
        return response.data;
      };
      getBlogsData().then((data) => setBlogsData(data));
      return () => {
        // console.log("unmounted");
        effectRan.current = true;
      };
    }
  }, []);

  const blog = blogsData.find((blogObj) => blogObj.id === blogId);

  if (!blog) {
    return (
      <p className="grid place-content-center p-5 text-3xl">
        No Blog found with id:{" "}
        <strong className="inline-block">{blogId}</strong>
      </p>
    );
  }

  return (
    <main className="text-left p-20">
      My Blog <span className="font-bold">{blog?.title}</span>
    </main>
  );
};
export default BlogDescription;
