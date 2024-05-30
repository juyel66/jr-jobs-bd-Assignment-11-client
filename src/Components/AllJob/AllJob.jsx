import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllJobCard from "./AllJobCard";

const AllJob = () => {
  const [search, setSearch] = useState('');
  // const [allJob, setAllJob] = useState([]);
  console.log(search);

  const { data: allJobData, isLoading,  refetch } = useQuery({
    queryKey: "allJobs",
    queryFn: fetchAllJobs,
  });
  console.log("is loading", isLoading);

  useEffect(() => {
    refetch();
  }, [allJobData,isLoading,refetch]);

  async function fetchAllJobs() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/jobs`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Error fetching all jobs");
    }
  }

  if (isLoading) return <div><p className="text-3xl text-center lg:mt-40 mt-10">Wait Please...</p>;
  <div className="flex mt-10 justify-center"><span className="loading  loading-spinner w-40 "></span> </div></div>

  return (
    <div className="lg:w-[1200px] mx-auto">
      <h1 className="text-3xl text-center font-bold mb-5 mt-5">
        Total Job: {allJobData.length}
      </h1>
      <div className=" flex items-center justify-center">
        <label className="input border-2 lg:w-[500px]  border-gray-700 input-bordered flex items-center gap-2">
          <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search by title" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
          </svg>
        </label>
      </div>
      <Helmet><title>All Jobs</title></Helmet>
      <div>
        <div>
      
          
         
          

                

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                      
                    {allJobData
                          .filter((job) => {
                            const jobTitleLowerCase = job.jobTitle.toLowerCase(); // Convert job title to lowercase
                            const searchLowerCase = search.toLowerCase(); // Convert search term to lowercase
                            const searchTitle = searchLowerCase.charAt(0).toUpperCase() + searchLowerCase.slice(1); // Convert first character to uppercase
                            return searchLowerCase === '' ? true : jobTitleLowerCase.includes(searchLowerCase) || jobTitleLowerCase.includes(searchTitle);
                          })
                          .map((job, idx) => (
                            <AllJobCard key={job._id} idx={idx} job={job}></AllJobCard>
                          ))}

                    </div>
  
   
        </div>
      </div>
    </div>
  );
};

export default AllJob;
