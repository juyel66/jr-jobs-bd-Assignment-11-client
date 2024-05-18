import { useEffect, useState } from "react";
import AppliedJobCard from "./AppliedJobCard";
import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query"; // Only use useQuery from Tanstack/react-query

const AppliedJob = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [appliedJobs, setAppliedJobs] = useState([]);
  const { user } = useAuth();

  const { data: myJobData, isLoading, refetch } = useQuery({
    queryKey: "myJobs",
    queryFn: fetchMyJobs,
  });

  useEffect(() => {
    refetch();
  }, []);

  async function fetchMyJobs() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/applied?buyer_email=${user.email}`,
        {
          credentials: "include",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setAppliedJobs(data);
    } catch (error) {
      console.error("Error fetching applied jobs:", error);
    }
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredJobs =
    selectedCategory === "all"
      ? appliedJobs
      : appliedJobs.filter((job) => job.category === selectedCategory);

  return (
    <div className="lg:w-[1200px] mx-auto">
      <Helmet>
        <title>Applied job</title>
      </Helmet>
      <select
        className="select select-bordered w-64 text-center mt-10 join-item bg-[#23BE0A] text-white text-2xl"
        onChange={handleCategoryChange}
        value={selectedCategory}
      >
        <option value="all" className="text-xl">
          Filter by category
        </option>
        <option value="On Site" className="bg-white text-black text-sm text-start">
          On Site
        </option>
        <option value="Remote" className="bg-white text-black text-sm text-start">
          Remote
        </option>
        <option value="Hybrid" className="bg-white text-black text-sm text-start">
          Hybrid
        </option>
        <option value="Part-Time" className="bg-white text-black text-sm text-start">
          Part-Time
        </option>
      </select>

      {isLoading ? (
        <div>
          <p className="text-3xl text-center mt-10 lg:mt-20">Loading...</p>
          <div className="flex lg:mt-10 justify-center">
            <span className="loading  loading-spinner w-40 "></span>{" "}
          </div>
        </div>
      ) : (
        filteredJobs
          .filter((j) => j.email === user?.email)
          .map((job) => <AppliedJobCard key={job._id} job={job} />)
      )}
    </div>
  );
};

export default AppliedJob;
