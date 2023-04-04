import { Link } from "react-router-dom";

const MyProfile = () => {
  return (
    <div className="flex p-5 text-xl">
      <Link to="postedJobs" className="hover:underline">
        <button type="button">See Posted Jobs</button>
      </Link>
    </div>
  );
};
export default MyProfile;
