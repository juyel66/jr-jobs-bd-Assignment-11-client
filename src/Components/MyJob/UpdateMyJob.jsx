// import { useContext, useState } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";



const UpdateMyJob = () => {
    const [startDate, setStartDate] = useState(new Date());
    // const location = useLocation();
    const navigate = useNavigate()
    const data = useLoaderData()
    console.log(data)
    const {jobCategory,deadline,minimumPrice,maximumPrice, jobTitle,jobPostingDate,jobDescription,jobBannerUrl, _id} = data || {};
    // const {} = data;
    // const {user} = useContext(AuthContext);
    // const {user} = useContext(AuthContext);
   
    const handleAddJobData = e =>{
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        // const buyer_email = form.buyer_email.value;
        const jobTitle = form.jobTitle.value;
        const jobCategory = form.jobCategory.value;
        const jobDescription = form.jobDescription.value;
        const jobPostingDate = startDate;
        const deadline = startDate;
        const jobBannerUrl = form.jobBannerUrl.value;
        const minimumPrice = parseInt(form.minimumPrice.value);
        const maximumPrice = parseInt(form.maximumPrice.value);
        

        const addAllJob = { jobCategory,maximumPrice,deadline,minimumPrice,jobBannerUrl,jobPostingDate,jobDescription,jobTitle}
        console.table(addAllJob);


    //         //  send data to the server
    fetch(`${import.meta.env.VITE_API_URL}/jobs/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addAllJob),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate('/myJobs')
          if (data.modifiedCount> 0) {
            Swal.fire({
              title: "Success!",
              text: "Tourists updated successfully",
              icon: "success",
              confirmButtonText: "done",
            });
          }
      
          else{
            // alert('data already added form update then updated button click')
            Swal.fire({
              title: "Not Update!",
              text: "Update your old data and then hit the update button again",
              icon: "error",
              confirmButtonText: "try again",
            });
          }
        });


    }
    return (
        <div>
          <Helmet><title>Update my job</title></Helmet>
        <div className="bg-green-100 rounded-xl mb-10 mt-10 border-2">
              <h1 className="text-3xl text-green-500 font-extrabold text-center mt-5">
                Update your job
              </h1>
              <form onSubmit={handleAddJobData}  className="mt-5">
                {/* name row */}
              
                <div className="flex gap-5  mb-4">
                  <div className="w-1/2 ml-10">
                    <label className="input-group">
                      <label className="label">
                        <span>Job Title</span>
                      </label>
                      <input
                        className="input border-gray-500 w-full input-bordered join-item"
                        // placeholder="Enter your Job title"
                        defaultValue={jobTitle}
                        name="jobTitle"
                        type="text"
                      />
                    </label>
                  </div>
                  <div className="w-1/2 mr-10">
                    <label className="input-group">
                      <label className="label">
                        <p>Job Category</p>
                      </label>
        
                      <select name="jobCategory" defaultValue={jobCategory} className="border h-[46px] border-gray-500  w-full input-bordered join-item rounded-md p-2">
                        <option value='On Site'>On Site</option>
                        <option value= 'Remote'>Remote</option>
                        <option value='Hybrid'>Hybrid</option>
                        <option value='Part-Time'>Part-Time</option>
                        
                      </select>
                      {/* <input
                        className="input w-full input-bordered join-item"
                        placeholder="Enter Tourists spot name"
                        name="jobCategory"
                        type="text"
                      /> */}
                    </label>
                  </div>
                </div>
                {/* supplier */}
                <div className="flex gap-5 mb-4">
                  <div className="w-1/2 ml-10">
                    <label className="input-group">
                      <label className="label">
                        <span>Job Posting Date</span>
                      </label>
                      <DatePicker defaultValue={jobPostingDate} className="border-2 h-[46px] rounded-xl border-gray-400 lg:w-[710px] w-[135px]  join-item  p-2 mt-2 border-gray-700]" selected={startDate} onChange={(date) => setStartDate(date)} />
                   
                    </label>
                  </div>
                  <div className="w-1/2 mr-10">
                    <label className="input-group">
                      <label className="label">
                        <span>Deadline</span>
                      </label>
                      <DatePicker defaultValue={deadline}   className="border-2 h-[46px] rounded-xl border-gray-400 lg:w-[710px] w-[135px]  join-item  p-2 mt-2 border-gray-700]" selected={startDate} onChange={(date) => setStartDate(date)} />
        
                    </label>
                  </div>
                </div>
                <div className="flex gap-5 mb-4">
                  <div className="w-1/2 ml-10">
                    <label className="input-group">
                      <label className="label">
                        <span>Job Description</span>
                      </label>
                      <input
                        className="input border-gray-500 w-full input-bordered join-item"
                        // placeholder="Enter Average cost"
                        name="jobDescription"
                        defaultValue={jobDescription}
                        type="text"
                      />
                    </label>
                  </div>
                  <div className="w-1/2 mr-10">
                    <label className="input-group">
                      <label className="label">
                      <span>Job Banner Url</span>
                      </label>
                      <input
                        className="input border-gray-500 w-full input-bordered join-item"
                        // placeholder="Enter Travel time"
                        name="jobBannerUrl"
                        defaultValue={jobBannerUrl}
                        type="url"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex gap-5 mb-4">
                  <div className="w-1/2 ml-10">
                    <label className="input-group">
                      <label className="label">
                        <span className="lg:flex">Minimum Price<span className="lg:flex hidden">Per Year</span> </span>
                      </label>
                      <input
                        className="input w-full border-gray-500 input-bordered join-item"
                        // placeholder="Minimum Price"
                        name="minimumPrice"
                        defaultValue={minimumPrice}
                        type="number"
                      />
                    </label>
                  </div>
                  <div className="w-1/2 mr-10">
                    <label className="input-group">
                      <label className="label">
                        <span> Maximum Price</span>
                      </label>
                      <input
                        className="input border-gray-500 w-full input-bordered join-item"
                        // placeholder="Enter Travel time"
                        name="maximumPrice"
                        defaultValue={maximumPrice}
                        type="number"
                      />
                      {/* <select className="input w-full input-bordered join-item" name="seasonality">
                        <option value="volvo">Summer</option>
                        <option value="saab">Rainy Season</option>
                        <option value="mercedes">Autumn</option>
                        <option value="audi">Late Autumn</option>
                        <option value="audi">Winter</option>
                        <option value="audi">Spring</option>
                      </select> */}
                      
        
                    </label>
                  </div>
                </div>
        
                {/* <div className="ml-10 mr-10">
                  <label className="input-group">
                    <label className="label">
                      <span>Job Banner Url</span>
                    </label>
                    <input
                      className="input  w-full input-bordered join-item"
                      placeholder="Enter photo URL"
                      name="jobBannerUrl"
                      type="url"
                    />
                  </label>
                </div> */}
                {/* <input type="submit" className="btn ml-10 lg:w-[96] mr-10 btn-block bg-gray-600 text-white mt-5" value="Add Coffee" /> */}
                <input
                  type="submit"
                  className="btn  bg-gray-500 text-xl text-white w-full   mt-5 mb-5"
                />
              </form>
            </div>
        </div>
    );
};

export default UpdateMyJob;