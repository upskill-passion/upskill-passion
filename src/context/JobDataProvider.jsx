import { createContext, useState, useRef, useEffect } from "react";
// import axios from "../api/axios";

const JobContext = createContext({});

export const JobDataProvider = ({ children }) => {
  const [endPoint, setEndPoint] = useState("/jobs");
  const [data, setData] = useState([]);
  const effectRan = useRef(false);

  useEffect(() => {
    // console.log("unmounted");
    if (effectRan.current === true) {
      const getJobsData = async () => {
        const response = await axios.get(endPoint);
        // console.log(response.data);
        return response.data;
      };
      getJobsData().then((data) => setData(data));
    }
    return () => {
      // console.log("unmounted");
      effectRan.current = true;
    };
  }, [endPoint]);

  return (
    <JobContext.Provider value={{ data, setEndPoint }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobContext;
