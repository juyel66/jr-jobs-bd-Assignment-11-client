import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";


const ViewDetails = () => {
    const SingleJob = useLoaderData();
    const {user} = useContext(AuthContext);
  console.log(SingleJob);
  const {
    jobCategory,
    jobBannerUrl,
    deadline,
    // jobBannerUrl,
    name,
    jobDescription,
    jobTitle,
    salaryRange,
    jobPostingDate,
    buyer_email,
    // _id,
  } = SingleJob || {};
    return (
        <div className="lg:w-[1200px] mx-auto">
          <Helmet><title>View Details</title></Helmet>
             <div className="flex flex-col mt-10 mb-10 md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
      {/* Job Details */}
      <div className="flex-1 border-2  border-gray-900   lg:px-4 lg:py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
        <img
          className="h-[250px] lg:w-[1000px] lg:ml-[100px] "
          src={jobBannerUrl}
          alt=""
        />
        <div className="flex items-center justify-between">
          <span className="px-4 text-2xl font-bold py-1  text-blue-800 uppercase bg-blue-200 rounded-full ">
            {/* Posting Date: {jobPostingDate} */}
            Posting Date: {new Date(jobPostingDate).toLocaleDateString()}
          </span>
          <span className="px-4 text-2xl font-bold py-1  text-blue-800 uppercase bg-blue-200 rounded-full ">
            {jobCategory}
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
            {jobTitle}
          </h1>

          <p className="mt-2 text-lg text-gray-600 ">
            {jobDescription.slice(0,520)}
          </p>
          <p className="mt-6  text-xl  font-bold text-gray-600 ">
            Buyer Details:
          </p>
          <div className="flex items-center gap-5">
            <div>
             <div className="flex gap-16">
             <div>
             <p className="mt-2   text-gray-600 text-xl ">Name: {name}</p>
              <p className="mt-2 text-xl  text-gray-600 ">
                Email: {buyer_email}
              </p>
             </div>
             {/* <div>
              <img className="rounded-full lg:w-16 lg:h-16" src={user?.photoURL} alt="" />
             </div> */}
             </div>
            </div>
            <div className="rounded-full object-cover overflow-hidden w-14 h-14">
              <img src="" alt="" />
            </div>
          </div>
          <p className=" text-lg mt-4 font-bold text-gray-600 ">
            Deadline: {new Date(deadline).toLocaleDateString()}
          </p>
          <p className=" text-lg font-bold text-gray-600 ">
            Price Range: {salaryRange}
          </p>
        </div>
        <Link to='/' className="btn bg-gray-300 w-full mt-2">Back to home</Link>


     
        
      </div>
     
    </div>
            
        </div>
    );
};

export default ViewDetails;