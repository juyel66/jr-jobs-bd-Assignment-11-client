
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllJobCard from "./AllJobCard";

const AllJob = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const { data: allJobData = [], isLoading, refetch } = useQuery({
    queryKey: "allJobs",
    queryFn: fetchAllJobs,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

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

  if (isLoading) return (
    <div>
      <p className="mt-10 text-3xl text-center lg:mt-40">Wait Please...</p>
      <div className="flex justify-center mt-10">
        <span className="w-40 loading loading-spinner"></span>
      </div>
    </div>
  );

  //========================= searching function ================================
  const filteredJobs = allJobData.filter((job) => {
    const jobTitleLowerCase = job.jobTitle.toLowerCase();
    const searchLowerCase = search.toLowerCase();
    const searchTitle = searchLowerCase.charAt(0).toUpperCase() + searchLowerCase.slice(1);
    return searchLowerCase === '' ? true : jobTitleLowerCase.includes(searchLowerCase) || jobTitleLowerCase.includes(searchTitle);
  });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="lg:w-[1200px] mx-auto mb-10">
      <Helmet><title>All Jobs</title></Helmet>
      <h1 className="mt-5 mb-5 text-3xl font-bold text-center">
        Total Job: {filteredJobs.length}
      </h1>
      <div className="flex items-center justify-center">
        <label className="input border-2 lg:w-[500px] border-gray-700 input-bordered flex items-center gap-2">
          <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search by title" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
          </svg>
        </label>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {currentJobs.map((job, idx) => (
            <AllJobCard key={job._id} idx={idx} job={job}></AllJobCard>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center mt-10">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-1 lg:flex hidden bg-green-400 text-white rounded ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 lg:hidden mx-1 lg:[59px] w-[55px] bg-green-400 text-white rounded ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            Previ
          </button>
          {[...Array(totalPages).keys()].map(number => (
            <button
              key={number + 1}
              onClick={() => setCurrentPage(number + 1)}
              className={`px-4 py-2 mx-1 rounded ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              {number + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 mx-1 bg-green-400 text-white lg:w-[100px] w-[55px] rounded ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            Next
          </button>
        </div>





        
      </div>
    </div>
  );
};

export default AllJob;

