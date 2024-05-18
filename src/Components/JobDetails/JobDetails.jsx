import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
// import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";

const JobDetails = () => {
  // const { user } = useContext(AuthContext);
  const {user} = useAuth()
  const [startDate, setStartDate] = useState(new Date());
  const SingleJob = useLoaderData();

  const {
    jobCategory,
    deadline,
    jobBannerUrl,
    name,
    jobDescription,
    jobTitle,
    salaryRange,
    jobPostingDate,
    buyer_email,
    _id,
  } = SingleJob || {};

  const handleSubmitJob = (e) => {
    // e.preventDefault();
    if (user?.email === buyer_email)
      return Swal.fire({
        title: "Add not Success!",
        text: "You can not apply for your job",
        icon: "error",
        confirmButtonText: "Back",
      });

      

    const form = e.target;
    const id = _id;
    const name = form.name.value;
    const email = form.email.value;
    const resume = form.resume.value;
    const category = jobCategory;
    const banner = jobBannerUrl;
    const title = jobTitle;
    const buyers_email = buyer_email;
    const selectedDeadline = startDate;
    const salary = salaryRange;
    const description = jobDescription;

    const allInfo = { name,description, deadline, salary, id, email, title, buyers_email, resume, banner, category };
    console.table(allInfo)

     // Compare selected deadline with actual deadline
  if (selectedDeadline < new Date(deadline)) {
    // Show error message if selected date is after the deadline
    return Swal.fire({
      title: "Deadline Error!",
      text: "The selected deadline cannot be after the job deadline",
      icon: "error",
      confirmButtonText: "OK",
    });
  }

    fetch(`${import.meta.env.VITE_API_URL}/applied`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allInfo),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Add Success!",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Done",
        });
      } else {
        Swal.fire({
          title: "not Success!",
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Done",
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      Swal.fire({
        title: "not applied!",
        text: "You already applied this job",
        icon: "error",
        confirmButtonText: "OK",
      });
    });
    
      
      
     
  };
  

  return (
   
    <div className="flex flex-col mt-10 mb-10 md:flex-row justify-around gap-5 items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
      {/* Job Details */}

      <Helmet><title>Job Details</title></Helmet>
      <div className="flex-1 border-2 border-gray-900 lg:px-4 lg:py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
        <img className="h-[250px] lg:w-[1000px] lg:ml-[100px] " src={jobBannerUrl} alt="" />
        <div className="flex items-center mt-5 justify-between flex-wrap">
          <span className="px-4 lg:text-2xl font-bold py-1 text-blue-800 uppercase bg-blue-200 rounded-full ">
            Posting Date: {new Date(jobPostingDate).toLocaleDateString()}
          </span>
          <span className="px-4 lg:text-2xl font-bold py-1 text-blue-800 uppercase bg-blue-200 rounded-full ">
            {jobCategory}
          </span>
        </div>

        <div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">{jobTitle}</h1>
          <p className="mt-2 text-lg text-gray-600 ">{jobDescription.slice(0, 320)}</p>
          <p className="mt-6 text-xl font-bold text-gray-600 ">Buyer Details:</p>
          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex items-center gap-16">
              <div>
                <p className="mt-2 text-gray-600 text-xl ">Name: {name}</p>
                <p className="mt-2 text-xl text-gray-600 ">Email: {buyer_email}</p>
              </div>
              {/* <div>
                <img  className="rounded-full w-20 lg:flex hidden  h-20" src={user?.photoURL} alt="" />
              </div> */}
            </div>
          </div>
          <p className="text-lg mt-4 font-bold text-gray-600 ">Deadline: {new Date(deadline).toLocaleDateString()}</p>
          <p className="text-lg font-bold text-gray-600 ">Price Range: {salaryRange}</p>
        </div>

        <div>
          <button
            className="btn w-full bg-green-500 text-white text-xl mt-2 mb-2"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Apply Now
          </button>

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <div className="flex justify-center items-center">
                <img className="w-20 rounded-full" src="https://i.ibb.co/Zf1n58f/imresizer-1715263855167.jpg" alt="" />
              </div>
              <h3 className="font-bold text-2xl">Apply</h3>
              <p className="py-4">Thanks for your interest in this position. Please fill in your information below.</p>
              <div className="modal-action">
                <form onSubmit={handleSubmitJob} method="dialog">
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label className="text-gray-700 " htmlFor="price">
                        Name
                      </label>
                      <input
                        id="price"
                        type="text"
                        name="name"
                        readOnly
                        defaultValue={user?.displayName}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-700 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 " htmlFor="emailAddress">
                        Email Address
                      </label>
                      <input
                        id="emailAddress"
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        readOnly
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-700 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 " htmlFor="comment">
                        Resume Link
                      </label>
                      <input
                        id="comment"
                        name="resume"
                        placeholder=" Enter your Resume Link"
                        type="url"
                        className="block w-full border-2 border-gray-700 px-4 py-2 mt-2 text-gray-700 bg-white rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700">Deadline</label>
                      <DatePicker className="border-2 p-2 mt-2 border-gray-700 w-[220px]" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                  </div>
                  <div className="space-x-5">
                    <input
                      className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#8A35DF] rounded-md w-full mt-5 hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
