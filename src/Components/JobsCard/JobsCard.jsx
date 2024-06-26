import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

const JobsCard = ({job}) => {
    const {jobCategory,deadline,minimumPrice,maximumPrice,jobBannerUrl, name,jobTitle,jobPostingDate, _id} = job || {};
    return (
     <div className="mx-auto">
       <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      
      className="border-2 mt-10 border-green-500 lg:w-[380px] hover:bg-gray-200 hover:border-2 hover:border-green-500 rounded-lg ">
        <div>
            <img className=" w-full h-[150px] rounded-xl" src={jobBannerUrl} alt="" />

        </div>
        <div>
        <div className='w-full px-4 py-3  rounded-md   transition-all'>
        <div className='flex items-center justify-between'>
          <span className='text-xs font-light text-gray-800 '>
          
          {/* Posting date: {jobPostingDate} */}
          Posting Date:{new Date(jobPostingDate).toLocaleDateString()}
          </span>

         
          <span className='text-xs font-light text-gray-800 '>
          Deadline: {new Date(deadline).toLocaleDateString()}
          </span>
         
        </div>
        <div><h1 className="text-2xl font-bold">{name}</h1></div>
  
        <div>
          <h1 className='mt-1 text-xl text-gray-800 '>
            {jobTitle}
          </h1>
  
          {/* <p className='mt-2 text-sm text-gray-600 '>
            Lorem ipsum dolor sit adipisicing elit...
          </p> */}
       <div className="flex justify-between items-center ">
       <p className='mt-2 text-sm font-bold text-gray-600 '>
           <div>
            <p>${minimumPrice}-${maximumPrice}</p>
           </div>
          </p>
          <span className='px-3 mt-1 font-bold  py-1 text-[15px] text-blue-800 uppercase bg-blue-200 rounded-full '>
            {jobCategory}
          </span>
          <p className='text-xs font-light text-gray-800'>Applicant: 0</p>
       </div>
       <Link to={`/job/${_id}`} className="btn w-full  mt-3 bg-green-400 text-white text-xl">View Details</Link>
        </div>
      </div>
        </div>
      </motion.div>
     </div> 
    )
  }
  JobsCard.propTypes ={
    job: PropTypes.node.isRequired
}
  
  export default JobsCard