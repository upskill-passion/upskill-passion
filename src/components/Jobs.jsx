import { Stack, Box } from "@mui/material";
import JobCard from "./JobCard";

const Jobs = ({ jobs }) => {
  return (
    <div className="jobsgrid">
      {jobs?.map((item, idx) => (
        <Box key={idx}>
          <JobCard job={item} />
        </Box>
      ))}
    </div>
  );
};
export default Jobs;
