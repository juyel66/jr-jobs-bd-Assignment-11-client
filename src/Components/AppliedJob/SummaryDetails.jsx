// import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
// import { usePDF } from 'react-to-pdf';
// // import { AuthContext } from "../AuthProvider/AuthProvider";
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// // import { toast } from "react-toastify";
// import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../MyDocument";

const SummaryDetails = () => {
    
    // const { user } = useContext(AuthContext);
    const jobSummary = useLoaderData();
    const {
        category,
        banner,
        deadline,
        name,
        description,
        title,
        resume,
        email,
    } = jobSummary || {};

 
    return (
        // lg:w-[1200px] mx-auto
        <div id="summaryDetails" className="flex lg:w-[1200px] flex-col mt-10 mb-10 md:flex-row justify-around gap-5 items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto">
            <Helmet><title>Summary Details</title></Helmet>
            <div className="flex-1 border-2 border-gray-900 px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
                <img className="h-[250px] lg:w-[1000px] mb-10 lg:ml-[100px]" src={banner} alt="" />
                <span className="px-4 text-2xl font-bold py-1 text-blue-800 uppercase bg-blue-200 rounded-full">
                    {category}
                </span>
                <div>
                    <h1 className="mt-2 text-3xl font-semibold text-gray-800">
                        {title}
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">
                        {description.slice(0, 520)}
                    </p>
                    <p className="mt-6 text-xl font-bold text-gray-600">
                        Buyer Details:
                    </p>
                    <div className="flex items-center gap-5">
                        <div>
                            <div className="flex gap-16">
                                <div>
                                    <p className="mt-2 text-gray-600 text-xl">Name: {name}</p>
                                    <p className="mt-2 text-xl text-gray-600">
                                        Buyer_Email: {email}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-full object-cover overflow-hidden w-14 h-14">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <p className="text-lg mt-4 font-bold text-gray-600">
                        Deadline: {new Date(deadline).toLocaleDateString()}
                    </p>
                    <p className="font-bold mt-2">My Resume Link: {resume}</p>
                </div>
                
                {/* <button className="btn w-full mt-2 text-xl bg-green-600 text-white" >Download</button> */}


                <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
            <button className="text-xl box-border border-4 border-zinc-500 w-80 h-14 rounded-lg mt-5 bg-green-500 relative group text-white">
              <span className="pr-8 text-white z-10">
                {({ loading }) =>
                  loading ? "Loading document..." : "Download Summary"
                }
              </span>
              {/* <span className="bg-zinc-900 absolute right-0 top-0 h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300 z-20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-8 inline mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </span> */}
              <span className="  w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                Download Summary
              </span>
            </button>
          </PDFDownloadLink>

            </div>
        </div>
    );
};

export default SummaryDetails;
