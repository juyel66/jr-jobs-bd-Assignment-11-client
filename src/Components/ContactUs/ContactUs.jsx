
// import { Helmet } from "react-helmet-async";
import GoogleMapReact from 'google-map-react';
// import { googleMapAPIKey } from "../Map/GoogleMap";
import Marquee from "react-fast-marquee";
// import {  toast } from "react-toastify";

import AOS from 'aos';
import 'aos/dist/aos.css';

// import { googleMapAPIKey } from "../ThailandCard/Map";
import { Helmet } from "react-helmet";
import Swal from 'sweetalert2';
import { googleMapAPIKey } from '../GoogleMap/Maps';

AOS.init();




const AnyReactComponent = ({ text }) => <div className="text-red-600 font-bold">{text}</div>;


const ContactUs = () => {
    const handleForm= e=>{
        e.preventDefault()
        e.target.reset()
        Swal.fire({
            title: "Success!",
            text: "Your Message send successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
    }

    const defaultProps = {
        center: {
            lat: 26.0274,
            lng: 88.4646
        },
        zoom: 20
    };
    return (
        <div className="lg:w-[1200px] mx-auto">
              <div>
            <Helmet><title>Contact </title> </Helmet>



            <Marquee className="text-5xl w-24 font-bold border h-20 flex justify-center items-center bg-green-300  rounded-xl mb-4 ">

                <div data-aos="fade-down">
                    <h1 className="lg:text-4xl text-3xl text-center font-bold font-sans bg-gradient-to-r from-primary via-red-900 to-secondary text-transparent bg-clip-text animate-gradient bg-400%" ><span data-aos="fade-right">Contact Us- </span>

                        <span className="">Mobile: 01747498166 </span> <span className="">Email: mdjuyelrana.com.bd1@gmail.com</span></h1>
                </div>



            </Marquee>


            <h1 data-aos="fade-down" data-aos-duration="1000" className="lg:text-4xl mt-5 text-3xl text-center font-bold font-sans bg-gradient-to-r from-primary via-green-500 to-secondary text-transparent bg-clip-text animate-gradient bg-300%">Our Office Location</h1>
            <div className="lg:flex space-y-3 gap-7 mt-5">
                <div>
                    <img className="h-[500px]" src="https://i.ibb.co/ryFsVw9/download-38.jpg" alt="" />
                </div>

                {/* google map  */}

                <div style={{ height: '500px', width: '100%' }}>

                    <GoogleMapReact
                        bootstrapURLKeys={{ key: googleMapAPIKey }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={defaultProps.center.lat}
                            lng={defaultProps.center.lng}
                            text="My Company"
                        />
                    </GoogleMapReact>
                </div>
            </div>

            {/* our team  */}

            {/* <h1 className="text-3xl ">Main Founder <span className="font-bold">Md Juyel Rana</span></h1> */}


            {/* form  */}
            <div className="text-center mt-10  mb-5 font-bold">
                <p className="text-5xl text-green-500">How to contact us</p>
                <p className="text-xl text-green-500">
                    If you want to contact us directly, you can contact us by calling the <br /> number given below or by emailing us directly.</p>
            </div>

            <div className="hero border-2 border-green-500 rounded-xl bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <div className="mb-10">
                            <h1 className="text-5xl font-bold text-gray-600">Address</h1>
                            <p className=""> 123 Main Street CityTown,
                                NY 12345 Dhaka Bangladesh</p>
                        </div>
                        <div>
                            <h1 className="text-5xl text-gray-600 font-bold">Phone: </h1>
                            <p className="">+8801750899730</p>
                        </div>
                        <div className="mt-10">
                            <h1 className="text-5xl text-gray-600 font-bold">Email:</h1>
                            <p className=""> mdjuyelrana.com.b1@gmail.com</p>
                        </div>
                    </div>
                    <div className="card shrink-0 border-2 border-green-600 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                                <label className="label">
                                    {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <input type="text" placeholder="Type your message" className="input input-bordered" required />
                                <label className="label">
                                    {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-xl  text-white bg-green-500">Send Your Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* form end  */}


            <div className="mt-10" >
                <h1 className="text-center text-4xl font-bold text-green-600 mb-4">Our Business Manager Team</h1>
                <p className="text-center text-green-500 font-bold">Our dedicated Business Manager Team offers expert guidance and support,  ensuring seamless operations <br /> and maximizing efficiency for your business </p>







            </div>



            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-9" >

                <div className="card card-compact border-2 border-green-500  bg-base-100 shadow-xl">
                    <figure><img className="h-[200px] pt-1 w-[220px] rounded-full" src="https://i.ibb.co/1qw10d1/images-13.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold"> Abir John.smith</h2>
                        <p className="font-bold ">Email: jhon1222@gmail.com</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-green-500 w-full text-white text-xl ">Contact us</button>
                        </div>
                    </div>
                </div>


                <div className="card card-compact border-2 border-green-500  bg-base-100 shadow-xl">
                    <figure><img className="h-[200px] pt-1 w-[220px] rounded-full" src="https://i.ibb.co/HK7NmPq/images-12.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Jsmith</h2>
                        <p className="font-bold">Email: jsmithjhon122@gmail.com</p>
                        <div className="card-actions justify-end">
                            <button className="btn  bg-green-500 w-full text-white text-xl  ">Contact us</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact border-2 border-green-500  bg-base-100 shadow-xl">
                    <figure><img className="h-[200px] pt-1 w-[220px] rounded-full" src="https://i.ibb.co/tq3tHWf/images-11.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold"> Somrat Akbar</h2>
                        <p className="font-bold">Email: smithjhon122@gmail.com</p>
                        <div className="card-actions justify-end">
                            <button className="btn  bg-green-500 w-full text-white text-xl ">Contact us</button>
                        </div>
                    </div>
                </div>

                <div className="card border-2 border-green-500 card-compact  bg-base-100 shadow-xl">
                    <figure><img className="h-[200px] pt-1 w-[220px] rounded-full" src="https://i.ibb.co/yR2xY2J/images-10.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Leo Martinej</h2>
                        <p className="font-bold">Email: jhon122@gmail.com</p>
                        <div className="card-actions justify-end">
                            <button className="btn  bg-green-500 w-full text-white text-xl ">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
            
        </div>
    );
};

export default ContactUs;