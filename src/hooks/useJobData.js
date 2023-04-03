// import { useContext } from "react";
// import JobContext from "../context/JobDataProvider";

import useSWR from "swr";
import { getJobs, jobsUrlEndpoint as cacheKey } from "../api/jobsApi";

const useJobData = () => {
  const { isLoading, error, data } = useSWR(cacheKey, getJobs);
  return {
    jobs: data,
    isLoading,
    error,
  };
};

export default useJobData;
