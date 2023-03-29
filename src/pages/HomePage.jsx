import Sidebar from "../components/Sidebar";
import Jobs from "../components/Jobs";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [data, setData] = useState([
    "aman",
    "shubh",
    "aman",
    "shubh",
    "aman",
    "shubh",
    "aman",
    "shubh",
  ]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2, lg: 4 },
          py: { sx: 0, md: 3 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          {selectedCategory} <span style={{ color: "#3b5998" }}>Jobs</span>
        </Typography>
        <Jobs jobs={data} />
      </Box>
    </Stack>
  );
};
export default HomePage;
