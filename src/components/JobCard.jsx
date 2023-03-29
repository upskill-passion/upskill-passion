import { Link } from "react-router-dom";
import { Typography, Card, CardContent } from "@mui/material";

const JobCard = ({ job }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        height: "300px",
        borderRadius: 4,
      }}
    >
      <CardContent
        sx={{ backgroundColor: "#1e1e1e", height: "100%" }}
      ></CardContent>
    </Card>
  );
};
export default JobCard;
