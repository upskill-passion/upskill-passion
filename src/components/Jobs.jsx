import { Stack, Box } from "@mui/material";
import JobCard from "./JobCard";

const Jobs = ({ jobs }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      gap={5}
      px={5}
    >
      {jobs?.map((item, idx) => (
        <Box key={idx}>
          <JobCard job={item} />
        </Box>
      ))}
    </Stack>
  );
};
export default Jobs;
