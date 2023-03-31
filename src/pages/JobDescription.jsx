import { useParams } from "react-router-dom";
import useJobData from "../hooks/useJobData";
import {
  BsBookmarkCheckFill,
  BsBookmarkCheck,
  BsArrowUpRight,
} from "react-icons/bs";
import { useState } from "react";

const JobDescription = () => {
  const [checked, setChecked] = useState(false);
  // let checked = false;
  const { jobId } = useParams();
  // console.log(id);

  const { data } = useJobData();

  const job = data.find((jobObj) => jobObj._id === jobId);

  if (!job) {
    return (
      <p className="grid place-content-center p-5 text-3xl">
        No Job found with id: <strong className="inline-block">{jobId}</strong>
      </p>
    );
  }

  return (
    <main className="text-left p-20">
      <p className="font-bold text-[50px]">{job?.title}&nbsp; </p>
      <p className="text-[35px] font-semibold">{job?.description}</p>
      <p className="text-green-500 text-[20px] font-normal inline-block">
        {job?.company}
      </p>
      <div className="px-3 py-2 mx-5 rounded-md bg-blue-500 text-white font-bold my-3 inline-block">
        {job?.jobType}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[23px]">
        <div>
          <p>
            <strong>Minimum Qualification:</strong> {job?.minEducation}
          </p>
          <p>
            <strong>Positions Available:</strong> {job?.positions}
          </p>
          <p>
            <strong>Experience Required:</strong> {job?.experience}
          </p>
          <p>
            <strong>Location:</strong> {job?.location?.city},{" "}
            {job?.location?.state}, {job?.location?.country}
          </p>
        </div>

        <div>
          <p>
            <strong>Deadline:</strong> {job?.lastDate.substring(0, 10)}
          </p>
          <p>
            <strong>Estimated Salary:</strong> {job?.salary} INR
          </p>
          <p>
            <strong>Tags:</strong> {job?.industry.join(",")}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 my-2">
        <button
          type="button"
          className="border-blue-500 border-2 text-blue-500 w-[160px] h-[40px] px-2 rounded-sm flex flex-row items-center gap-4"
          onClick={() =>
            setChecked((prevState) => {
              return !prevState;
            })
          }
        >
          Save for Later
          {checked ? <BsBookmarkCheckFill /> : <BsBookmarkCheck />}
        </button>
        <button
          type="button"
          className="border-red-500 border-2 text-red-500 w-[160px] h-[40px] px-2 rounded-sm"
        >
          <a
            href="https://www.google.com/"
            className="no-underline flex flex-row items-center gap-4"
            target="_blank"
          >
            Apply For Job
            <BsArrowUpRight />
          </a>
        </button>
      </div>
    </main>
  );
};
export default JobDescription;
