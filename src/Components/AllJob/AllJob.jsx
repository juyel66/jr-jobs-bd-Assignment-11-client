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
          <section className="container px-4 mx-auto">
            <div className="flex items-center gap-x-3"></div>
            <div className="flex flex-col mt-6">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr className="flex">
                          <th className="lg:flex ">
                            <th className="flex lg:gap-8">
                              <th className="flex lg:gap-[150px]">
                                <th scope="col" className="py-3.5 px-4  font-bold text-left rtl:text-right">
                                  <div className="flex items-center  ml-5">
                                    <span>Title</span>
                                  </div>
                                </th>
                                <button scope="col" className="px-4 py-3.5  text-left rtl:text-right font-bold">
                                  <span>Deadline</span>
                                </button>
                              </th>
                              <th className="flex lg:gap-[120px]">
                                <th scope="col" className="px-4 py-3.5  text-left rtl:text-right">
                                  <button className="flex  items-center gap-x-2">
                                    <span>PriceRange</span>
                                  </button>
                                </th>
                                <button scope="col" className="px-4 py-3.5  font-bold text-left mr-20 rtl:text-right text-black">
                                  <span> Category</span>
                                </button>
                              </th>
                            </th>
                            <th className="flex lg:gap-[50px]">
                              <button scope="col" className="px-4 lg:flex hidden py-3.5 font-bold text-left rtl:text-right">
                                Posting-date
                              </button>
                              <th className="px-4 py-3.5 lg:flex hidden  font-bold text-left rtl:text-right">
                                Details
                              </th>
                            </th>
                          </th>
                        </tr>
                        {/* <tr className="lg:hidden ">
                          <th scope="col" className="py-3.5 px-4 text-sm font-normal  text-gray-500">
                            <div className="flex items-center gap-x-3">
                              <span>Title</span>
                            </div>
                          </th>
                          <th scope="col" className="px-4 py-3.5 text-sm font-normal  text-gray-500">
                            <span>Deadline</span>
                          </th>
                          <th scope="col" className="px-4 py-3.5 text-sm font-normal  text-gray-500">
                            <button className="flex items-center gap-x-2">
                              <span>Price Range</span>
                            </button>
                          </th>
                          <th scope="col" className="px-4 py-3.5 text-sm font-normal  text-gray-500">
                            Category
                          </th>
                          <th scope="col" className="px-4 py-3.5 text-sm font-normal  text-gray-500">
                            Description
                          </th>
                          <th className="px-4 py-3.5 text-sm font-normal  text-gray-500">
                            Action
                          </th>
                        </tr> */}
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AllJob;
