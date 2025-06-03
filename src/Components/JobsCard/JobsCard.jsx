import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const JobsCard = ({ job }) => {
  const {
    jobCategory,
    deadline,
    minimumPrice,
    maximumPrice,
    jobBannerUrl,
    name,
    jobTitle,
    jobPostingDate,
    _id,
  } = job || {};

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="overflow-hidden transition duration-300 border border-green-500 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-100"
    >
      <img
        className="object-cover w-full h-48"
        src={jobBannerUrl}
        alt={jobTitle}
      />
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Posting Date: {new Date(jobPostingDate).toLocaleDateString()}</span>
          <span>Deadline: {new Date(deadline).toLocaleDateString()}</span>
        </div>

        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <h3 className="text-gray-600 text-md">{jobTitle}</h3>

        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-700">${minimumPrice} - ${maximumPrice}</p>
          <span className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            {jobCategory}
          </span>
        </div>

        <p className="text-sm text-gray-500">Applicant: 0</p>

        <Link
          to={`/job/${_id}`}
          className="block py-2 mt-2 font-semibold text-center text-white bg-green-500 rounded hover:bg-green-600"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

JobsCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobsCard;
