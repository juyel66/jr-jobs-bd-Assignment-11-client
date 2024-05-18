import MyJobCard from "./MyJobCard";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

const MyJob = () => {
  const { user } = useAuth();

  const updateMyJobMutation = useMutation((updatedData) =>
    axios.put(`${import.meta.env.VITE_API_URL}/jobs`, updatedData, {
      withCredentials: true,
    })
  );

  const {
    data: myJobData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: "myJobs",
    queryFn: fetchMyJobs,
  });
  console.log("is loading", isLoading);

  useEffect(() => {
    refetch();
  }, []);

  async function fetchMyJobs() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error("Error fetching my jobs");
    }
  }

  const updateMyJob = async (updatedData) => {
    try {
      await updateMyJobMutation.mutateAsync(updatedData);
      console.log("Data updated successfully!");

      refetch();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  if (isLoading)
    return (
      <div>
        <p className="text-3xl text-center mt-10 lg:mt-20">wait please...</p>;
        <div className="flex lg:mt-10 justify-center">
          <span className="loading  loading-spinner w-40 "></span>{" "}
        </div>
      </div>
    );

  return (
    <div className="lg:w-[1200px] mx-auto">
      <Helmet>
        <title>My Job</title>
      </Helmet>
      <h1 className="text-3xl text-center font-bold mt-5 underline mb-5">
        My Posted Job
      </h1>
      <div>
        <div>
          <section className="container px-4 mx-auto pt-12">
            <div className="flex items-center gap-x-3">
              {/* <h2 className='text-lg font-medium text-gray-800 '>My Posted Jobs</h2> */}

              {/* <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
      05 Jobs
    </span> */}
            </div>

            <div className="flex flex-col mt-6">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr className="lg:flex  hidden">
                          <th className="flex gap-24">
                            <th className="flex gap-8">
                              <th className="flex gap-40">
                                <th
                                  scope="col"
                                  className="py-3.5 px-4  font-bold text-left rtl:text-right "
                                >
                                  <div className="flex items-center gap-x-3 ml-5">
                                    <span>Title</span>
                                  </div>
                                </th>

                                <button
                                  scope="col"
                                  className="px-4 py-3.5    text-left rtl:text-right font-bold"
                                >
                                  <span>Deadline</span>
                                </button>
                              </th>

                              <th className="flex gap-[40px]">
                                <th
                                  scope="col"
                                  className="px-4 py-3.5 text-sm  text-left rtl:text-right "
                                >
                                  <button className="flex  items-center gap-x-2">
                                    <span>Price_Range</span>
                                  </button>
                                </th>

                                <button
                                  scope="col"
                                  className="px-4  py-3.5  font-bold text-left   mr-20 rtl:text-right text-black"
                                >
                                  <span> Category</span>
                                </button>
                              </th>
                            </th>

                            <th className="flex gap-[100px]">
                              <button
                                scope="col"
                                className="px-4 py-3.5   font-bold text-left rtl:text-right "
                              >
                                Description
                              </button>

                              <th className="px-4 py-3.5 font-bold text-left rtl:text-right ">
                                Action
                              </th>
                            </th>
                          </th>
                        </tr>
                        <tr className="lg:hidden">
                          <th
                            scope="col"
                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <div className="flex items-center gap-x-3">
                              <span>Title</span>
                            </div>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <span>Deadline</span>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            <button className="flex items-center gap-x-2">
                              <span>Price Range</span>
                            </button>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            Category
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                          >
                            Description
                          </th>

                          <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                            Action
                          </th>
                        </tr>
                      </thead>

                      <tbody className="bg-white divide-y divide-gray-200 ">
                      
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {myJobData &&
          myJobData
            .filter((job) => job.buyer_email === user?.email)
            .map((job, idx) => (
              <MyJobCard key={job._id} idx={idx} job={job}></MyJobCard>
            ))}
      </div>
    </div>
  );
};

export default MyJob;
