import { useContext } from "react";
import JobContext from "../context/JobDataProvider";

const useJobData = () => {
  return useContext(JobContext);
};

export default useJobData;
