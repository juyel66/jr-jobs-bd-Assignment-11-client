import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const AddAJob = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startDateTime, setStartDateTime] = useState(new Date());
    // const {user} = useContext(AuthContext);
    const {user} = useContext(AuthContext);
   
    const handleAddJobData = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const buyer_email = form.buyer_email.value;
        const jobTitle = form.jobTitle.value;
        const jobCategory = form.jobCategory.value;
        const jobDescription = form.jobDescription.value;
        // const jobPostingDate = startDate;
        const jobPostingDate = form.jobPostingDate.value;
        // const deadline = startDate;
        const deadline = form.deadline.value;
        const jobBannerUrl = form.jobBannerUrl.value;
        const applicants = form.applicants.value;
        const minimumPrice = parseInt(form.minimumPrice.value);
        const maximumPrice = parseInt(form.maximumPrice.value);
        

        const addAllJob = { jobCategory,maximumPrice,deadline,minimumPrice,jobBannerUrl, applicants,jobPostingDate,jobDescription, name,jobTitle, buyer_email}
        console.log(addAllJob);


        fetch(`${import.meta.env.VITE_API_URL}/jobs`,{
            // fetch('https://southeast-asia-server-three.vercel.app/Countries',{
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(addAllJob)
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Add Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Done'
                      })
                }
            })


    }
    return (
        <div className="lg:w-[1200px] mx-auto">
          <Helmet><title>Add A Job</title></Helmet>
<div className="bg-gray-200 rounded-xl mb-10 mt-10 border-2">
      <h1 className="text-3xl font-extrabold text-center mt-5">
        Add A Job
      </h1>
      <form onSubmit={handleAddJobData}  className="mt-5">
        {/* name row */}
        <div className="flex gap-5  mb-4">
          <div className="w-1/2 ml-10">
            <label className="input-group">
              <label className="label">
                <span>User Name</span>
              </label>
              <input
                className="input border-gray-500 w-full input-bordered join-item"
                // placeholder="Enter your user Name"
                defaultValue={user.displayName}
                readOnly
                name="name"
                type="text"
              />
            </label>
          </div>
          <div className="w-1/2 mr-10">
            <label className="input-group">
              <label className="label">
                <span> Enter your email</span>
              </label>
              <input
                className="input border-gray-500 w-full input-bordered join-item"
                // placeholder="Enter your email"
                defaultValue={user.email}
                readOnly
                name="buyer_email"
                type="email"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-5  mb-4">
          <div className="w-1/2 ml-10">
            <label className="input-group">
              <label className="label">
                <span>Job Title</span>
              </label>
              <input
                className="input border-gray-500 w-full input-bordered join-item"
                placeholder="Enter your Job title"
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

              <select name="jobCategory" className="border h-[46px] border-gray-500  w-full input-bordered join-item rounded-md p-2">
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
                <span>Job Description</span>
              </label>
              <input
                className="input border-gray-500 w-full input-bordered join-item"
                placeholder="Enter job description Description"
                name="jobDescription"
                type="text"
              />
            </label>
          </div>
          {/* <div className="w-1/2 mr-10">
            <label className="input-group">
              <label className="label">
              <span>Job Banner Url</span>
              </label>
              <input
                className="input border-gray-500 w-full input-bordered join-item"
                placeholder="Enter your job banner URL"
                name="jobBannerUrl"
                type="url"
              />
            </label>
          </div> */}

<div className="  mr-10  w-1/2">
            <label className="input-group">
              <label className="label">
                <span className="lg:flex">Job Applicants <span className="lg:flex hidden">Number</span> </span>
              </label>
              <input
                className="input w-full border-gray-500 input-bordered join-item"
                placeholder="Applicants by default(0)"
                name="applicants"
                type="number"
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
                placeholder="Minimum Price"
                name="minimumPrice"
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
                placeholder="Enter Maximum Price"
                name="maximumPrice"
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

         
        

          <div className=" ml-10 mr-10">
            <label className="input-group">
              <label className="label">
              <span>Job Banner Url</span>
              </label>
              <input
                className="input border-gray-500 w-full input-bordered join-item"
                placeholder="Enter your job banner URL"
                name="jobBannerUrl"
                type="url"
              />
            </label>
          </div>



        <div className="lg:flex  gap-5 mb-4">
          <div className="ml-10">
                <span>Job Posting Date</span><br />
              <DatePicker className="border-2 h-[46px] rounded-xl w-[240px] border-gray-400   join-item  p-2 mt-2 border-gray-700]" selected={startDate} name="jobPostingDate" onChange={(date) => setStartDate(date)} />
           
          </div>
          <div className="ml-10">
                <span><span className="lg:flex hidden"></span>Deadline</span> <br />
              <DatePicker className="border-2 h-[46px] rounded-xl w-[240px] border-gray-400 join-item  p-2 mt-2 border-gray-700]" name="deadline" selected={startDateTime} onChange={(date) => setStartDateTime(date)} />
          </div>
        </div>
         



        <input
          type="submit"
          className="btn  bg-gray-500 text-xl text-white w-full   mt-5 mb-5"
        />
      </form>
    </div>
</div>
    );
};

export default AddAJob;