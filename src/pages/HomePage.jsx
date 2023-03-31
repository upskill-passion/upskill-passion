import Sidebar from "../components/Sidebar";
import Jobs from "../components/Jobs";
import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState([]);
  const effectRan = useRef(false);

  const filterJobs = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    // console.log("unmounted");
    if (effectRan.current === true) {
      const getJobsData = async () => {
        const response = await axios.get("http://localhost:3000/api/v1/jobs");
        // console.log(response.data);
        return response.data;
      };
      getJobsData().then((data) => setData(data?.data));
    }
    return () => {
      // console.log("unmounted");
      effectRan.current = true;
    };
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="py-7 px-3 h-full flex-1">
        <div className="flex sm:flex-row sm:justify-between sm:items-center flex-col items-start p-2">
          <div>
            <Typography
              variant="h4"
              fontWeight="bold"
              mb={2}
              sx={{
                color: "white",
              }}
            >
              <span className="text-[#3b5998]">Recent Jobs</span>
            </Typography>
          </div>
          <div>
            <form className="flex items-center justify-start gap-2">
              <input
                type="search"
                id="search-jobs"
                placeholder="Search Job"
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
        </div>
        <Jobs jobs={data} />
      </div>
    </div>
  );
};
export default HomePage;
