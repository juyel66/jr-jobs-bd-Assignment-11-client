import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';



const AppliedJobCard = ({job}) => {
    console.log(job)
    const  {category,deadline,title,banner,_id}= job;
    return (
        <div>
            <div>
                
          

            </div>
               <div>
                <div className="hero mt-5 border-2 border-green-500 rounded-xl bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="">
                            <img src={banner} className="lg:w-[270px] w-[300px] h-[270px] lg:h-[120px] rounded-lg shadow-2xl" />
                        </div>
                        <div className=" lg:w-[700px]">
                           <div className="flex items-center justify-between">
                           <h1 className="lg:text-3xl font-bold mb-3">{title}</h1>
                           <p className="lg:flex gap-2 text-xl items-center"> <span className="font-bold">deadline: </span>{new Date(deadline).toLocaleDateString()}
                                </p>
                            <h1 className={`px-4 py-1 lg:text-2xl ${category === 'On Site' && 'text-blue-500 font-bold bg-blue-100/60'}
                          ${category === 'Remote' && 'text-red-500 font-bold bg-red-100/60'}
                          ${category === 'Hybrid' && 'text-green-500 font-bold bg-green-100/60'}
                          ${category === 'Part-Time' && 'text-yellow-500 font-bold bg-yellow-100/60'}
                          
                          `}>{category}</h1>
                           </div>

                           <p></p>
                            <p className=""> </p>
                            <div className="lg:flex  gap-10">
                               
                                {/* <p className="flex gap-2 items-center"> <span className="font-bold">Rating: </span>5<IoIosStar className="text-orange-400" /> </p>
                                <p> <span className="font-bold">Customaization: </span> Customize </p>
                                <p> <span className="font-bold">StockS tatus: </span>{status} </p> */}
                            </div>

                            <div className=" mt-5">
                                {/* <Link
                                    // to={`/viewDetails/${_id}`}
                                    className="btn lg:w-[200px] w-40 bg-green-500 text-xl text-white"
                                >
                                    View Details
                                </Link> */}

                                {/* <Link
                                    to={`/updateCraft/${_id}`}
                                    className="btn lg:w-[200px] w-20 bg-yellow-500 text-xl text-white">
                                    Update
                                </Link>
                                */}
                                <Link to={`/summary/${_id}`}
                                    // onClick={() => handlaeDelete(_id)}
                                    className="btn lg:w-[200px] w-full bg-yellow-500 text-xl text-white"
                                >
                                    Summary
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
AppliedJobCard.propTypes ={
    job: PropTypes.node.isRequired
}

export default AppliedJobCard;