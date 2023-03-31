import { useState } from "react";
import { control } from "../assets";

const Sidebar = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(true);
  const MAX = 1000;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / MAX}% 100%`,
    };
  };

  const filterJobs = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`${
        open ? "w-72" : "w-5"
      } h-screen bg-white relative p-5 pt-8 duration-300 flex flex-col gap-5 z-50 border-r-2 border-r-[#cecece]`}
    >
      <img
        src={control}
        alt="control"
        className={`absolute cursor-pointer rounded-full -right-4 top-9 w-7 border-2 border-dark-purple ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen((prevState) => !prevState)}
      />
      {open && (
        <form action="" method="get" className="flex flex-col gap-4">
          <button
            type="button"
            className="text-[18px] font-semibold outline-none border-blue-500 border-2 text-blue-500 rounded-sm py-3 px-4 hover:shadow-lg"
          >
            Clear all filters
          </button>
          <div className="border-2 border-[#3b5998] rounded-lg py-3 px-2">
            <label
              htmlFor="location-input"
              className="text-[18px] font-semibold block"
            >
              Location{" "}
            </label>
            <input
              type="range"
              id="location-input"
              min="0"
              max={MAX}
              onChange={(e) => setValue(e.target.value)}
              style={getBackgroundSize()}
              value={value}
            />
            <p>{value} Kms</p>
          </div>

          <div className="border-2 border-[#3b5998] rounded-lg py-3 px-2">
            <p className="text-[18px] font-semibold block">JobType </p>
            <p>
              <input
                type="checkbox"
                id="internship"
                defaultChecked={false}
                name="jobtype"
                value="Internship"
              />
              <label htmlFor="internship"> Internship</label>
            </p>
            <p>
              <input
                type="checkbox"
                id="permanent"
                defaultChecked={false}
                name="jobtype"
                value="Permanent"
              />
              <label htmlFor="permanent"> Permanent</label>
            </p>
            <p>
              <input
                type="checkbox"
                id="temporary"
                defaultChecked={false}
                name="jobtype"
                value="Temporary"
              />
              <label htmlFor="temporary"> Temporary</label>
            </p>
          </div>

          <div className="border-2 border-[#3b5998] rounded-lg py-3 px-2">
            <p className="text-[18px] font-semibold block">
              Experience Required{" "}
            </p>
            <p>
              <input
                type="checkbox"
                id="no-experience"
                defaultChecked={false}
                name="experienceReq"
                value="No Experience"
              />
              <label htmlFor="no-experience"> No Experience</label>
            </p>
            <p>
              <input
                type="checkbox"
                id="1year-2years"
                defaultChecked={false}
                name="experienceReq"
                value="1 year - 2 years"
              />
              <label htmlFor="1year-2years"> 1 year - 2 years</label>
            </p>
            <p>
              <input
                type="checkbox"
                id="2years-5years"
                defaultChecked={false}
                name="experienceReq"
                value="2 years - 5 years"
              />
              <label htmlFor="2years-5years"> 2 years - 5 years</label>
            </p>

            <p>
              <input
                type="checkbox"
                id="moreThan5Years"
                defaultChecked={false}
                name="experienceReq"
                value="More than 5 years"
              />
              <label htmlFor="moreThan5Years"> More than 5 years</label>
            </p>
          </div>

          <div className="border-2 border-[#3b5998] rounded-lg py-3 px-2">
            <p className="text-[18px] font-semibold block">
              Minimum Qualification{" "}
            </p>
            <p>
              <input
                type="checkbox"
                id="bachelors"
                defaultChecked={false}
                name="minQualification"
                value="Bachelors"
              />
              <label htmlFor="bachelors"> Bachelors</label>
            </p>
            <p>
              <input
                type="checkbox"
                id="hsc"
                defaultChecked={false}
                name="minQualification"
                value="HSC"
              />
              <label htmlFor="hsc"> HSC</label>
            </p>
            <p>
              <input
                type="checkbox"
                id="intermediate"
                defaultChecked={false}
                name="minQualification"
                value="Intermediate"
              />
              <label htmlFor="intermediate"> Intermediate</label>
            </p>

            <p>
              <input
                type="checkbox"
                id="diploma"
                defaultChecked={false}
                name="minQualification"
                value="Diploma"
              />
              <label htmlFor="diploma"> Diploma</label>
            </p>

            <p>
              <input
                type="checkbox"
                id="none"
                defaultChecked={false}
                name="minQualification"
                value="None"
              />
              <label htmlFor="none"> None</label>
            </p>
          </div>

          <div className="flex w-full justify-between border-b-2 border-b-[#cecece] pb-6">
            <button
              type="submit"
              onClick={filterJobs}
              className="font-bold bg-[#3b5998] text-white rounded-lg border-none px-5 py-3"
              formMethod="get"
            >
              Submit
            </button>
            <button
              type="reset"
              className="font-bold bg-[#3b5998] text-white rounded-lg border-none px-5 py-3"
            >
              Reset
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Sidebar;
