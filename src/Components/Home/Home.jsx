import Properties from "../Properties/Properties";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";
import { Navigation, Pagination, A11y, EffectFade,Autoplay} from "swiper/modules";
import TabCategories from "../TabCategories/TabCategories";
import { Link, useLoaderData } from "react-router-dom";
// import { motion } from "framer-motion"
import { Helmet } from "react-helmet";



const Home = () => {
  const jobs = useLoaderData();
  // console.log(jobs)
  return (
    <div 

  //   initial={{ scale: 0 }}
  // animate={{ rotate: 360, scale: 1 }}
  // transition={{
  //   type: "spring",
  //   stiffness: 260,
  //   damping: 20
  // }}
  >
      <div  className="">
        <Helmet> <title>Home</title></Helmet>
        {/* swiper sliders  */}
        <div>
          <Swiper
            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
            effect="fade"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className="rounded-xl">
              <div
                className="hero  h-[60vh]"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/3hgDwnt/download-49.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                  <div className="">
                    <h1 className="mb-5 text-2xl font-bold lg:text-5xl">
                      <Typewriter
                        words={["Crafting Dynamic Websites for Every Device"]}
                        loop={5}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </h1>
                    {/* <h1>Bangladesh</h1> */}
                    <p className="mb-5 text-xl lg:w-[700px] mx-auto">
                    Dive into the world of responsive web development with this comprehensive guide. Learn how to design and build websites that adapt seamlessly to various screen sizes and devices, ensuring an optimal user experience across desktops, tablets, and smartphones. From flexible layouts and media queries to fluid grids and scalable images, discover the techniques and best practices to create responsive designs that look great and perform well on any device.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <div
                className="hero  h-[60vh]"
                style={{
                  backgroundImage: "url(https://i.ibb.co/k28nsP9/download-50.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                  <div className="">
                    <h1 className="mb-5 text-2xl font-bold lg:text-5xl">
                      <Typewriter
                        words={["Unleashing Creativity in Graphic Design"]}
                        loop={5}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </h1>
                    {/* <h1>Bangladesh</h1> */}
                    <p className="mb-5 text-xl lg:w-[700px] mx-auto">
                    Embark on a visual journey through the realm of graphic design with this captivating book. Explore the principles of design, color theory, typography, and composition, and learn how to harness these elements to create stunning visual communication. From logos and branding to posters and digital graphics, discover the secrets behind creating memorable and effective designs that captivate audiences and convey messages with clarity and impact. Packed with practical tips, inspiring examples, and hands-on exercises.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <div
                className="hero  h-[60vh]"
                style={{
                  backgroundImage: "url(https://i.ibb.co/KK50FXN/download-51.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                  <div className="">
                    <h1 className="mb-5 text-2xl font-bold lg:text-5xl">
                      <Typewriter
                        words={["Your Guide to Landing and Thriving in Remote Work"]}
                        loop={5}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </h1>
                    {/* <h1>Bangladesh</h1> */}
                    <p className="mb-5 text-xl lg:w-[700px] mx-auto">
                    Remote Ready is your ultimate roadmap to navigating the remote job market successfully. Whether your seeking a career change or transitioning from a traditional office environment, this book provides invaluable insights, tips, and resources for securing remote employment. From crafting the perfect remote-ready resume to acing virtual interviews and mastering remote collaboration tools.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <div
                className="hero  h-[60vh]"
                style={{
                  backgroundImage: "url(https://i.ibb.co/QPQHq8z/images-36.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                  <div className="">
                    <h1 className="mb-5 text-2xl font-bold lg:text-5xl">
                      <Typewriter
                        words={["Embracing the Future of Work"]}
                        loop={5}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </h1>
                    {/* <h1>Bangladesh</h1> */}
                    <p className="mb-5 text-xl lg:w-[700px] mx-auto">
                    Hybrid Horizons is your essential guide to navigating the emerging landscape of hybrid jobs. As the workforce undergoes a transformation, with remote and in-person work blending seamlessly, this book provides invaluable insights and strategies for both employers and employees. Explore the benefits and challenges of hybrid work models, learn how to effectively manage remote and on-site teams, and discover best practices for fostering collaboration and communication in a hybrid environment.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div>
          <TabCategories jobs={jobs}></TabCategories>
        </div>


        <div>
                <h1 className="mt-20 text-4xl font-bold text-center text-green-600">Meet Our Team</h1>
                <p className="font-bold text-center text-green-500">If you want to go for a tour with our team then you can contact us </p>

            </div>

            <div className="justify-between mt-10  lg:flex">
                {/* <div className="flex justify-center item-center">

                    <div>

                        <p className="mb-5 text-3xl font-bold">MD JUYEL RANA is one of these team members <Link to="/" className="text-blue-500 underline"> JR jobs BD</Link> company</p>
                        <div className="w-full join join-vertical">
                            <div  className="border collapse collapse-arrow join-item border-base-300">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="text-xl font-medium collapse-title">
                                Bachelors degree in marketing, communications, business, or a related field.
                                </div>
                                <div className="collapse-content">
                                    <p>Coordinate with event organizers and stakeholders to understand their online requirements and objectives for on-site events.</p>
                                </div>
                            </div>
                            <div className="border collapse collapse-arrow join-item border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="text-xl font-medium collapse-title">
                                Remote Customer Success Manager


                                </div>
                                <div className="collapse-content">
                                    <p> Build and maintain strong relationships with customers, serving as their primary point of contact for product onboarding, training, and support.</p>
                                </div>
                            </div>
                            <div className="border collapse collapse-arrow join-item border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="text-xl font-medium collapse-title">
                                Remote UX/UI Designer
                                </div>
                                <div className="collapse-content">
                                    <p>Design intuitive and user-friendly interfaces for web and mobile applications, focusing on enhancing the overall user experience. </p>
                                </div>
                            </div>
                            <div className="border collapse collapse-arrow join-item border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="text-xl font-medium collapse-title">
                                Part-Time Administrative Assistant
                                </div>
                                <div className="collapse-content">
                                    <p>oin our team as a Part-Time Administrative Assistant, where you'll provide crucial support to our office operations. Duties include answering phones, </p>
                                </div>
                            </div>
                            <div className="border collapse collapse-arrow join-item border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="text-xl font-medium collapse-title">
                                Hybrid Marketing Coordinator
                                </div>
                                <div className="collapse-content">
                                    <p>Join our team as a Hybrid Marketing Coordinator, where you'll blend remote work with in-office collaboration. You'll support marketing campaigns,</p>
                                </div>
                            </div>
                            <div className="border collapse collapse-arrow join-item border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="text-xl font-medium collapse-title">
                                Remote Customer Success Manager
                                </div>
                                <div className="collapse-content">
                                    <p>Build and maintain strong relationships with customers, serving as their primary point of contact for product onboarding, training, and support.</p>
                                </div>
                            </div>
                            <div className="border collapse collapse-arrow join-item border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="text-xl font-medium collapse-title">
                                Hybrid Software Engineer
                                </div>
                                <div className="collapse-content">
                                    <p>Join our team as a Hybrid Software Engineer, where you'll have the opportunity to work both remotely and in our office environment. You'll be involved in designing,</p>
                                </div>
                            </div>
                            <div className="border collapse collapse-arrow join-item border-base-300">
                                <input type="radio" name="my-accordion-4" />
                                <div className="text-xl font-medium collapse-title">
                                Hybrid Graphic Designer
                                </div>
                                <div className="collapse-content">
                                    <p>Join our creative team as a Hybrid Graphic Designer, where you'll blend remote work with in-person collaboration. You'll be responsible for creating visually appealing designs for various digital and print materials, including websites, social media assets</p>
                                </div>
                            </div>
                        
                        </div>
                    </div>



                </div> */}
                {/* <div>
                    <div data-aos="fade-down" className="border-2 border-gray-400 shadow-xl card card-compact bg-base-100">
                        <figure><img className="lg:h-[450px] lg:w-[750px]  obj rounded-full" src="https://i.ibb.co/6yZL9Xf/IMG-20240227-125137-03.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-bold card-title">MD JUYEL RANA</h2>
                            <p className="font-bold text-[16px] break-all">Email: <span className="font-bold text-[15px]">mdjuyelrana.com.bd1@gmail.com</span></p>
                            <p>Founder at JR jobs BD</p>
                            <div className="justify-center card-actions">
                               <Link  to="https://www.facebook.com/juyel99730" className="w-full"> <button className="w-full text-xl text-white bg-green-500 btn">Contact Us</button></Link>
                            </div>
                        </div>
                    </div>

                </div> */}

            </div>
            


            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-2 mt-9" >

<div data-aos="fade-up" className="border-2 border-green-500 shadow-xl card card-compact bg-base-100">
    <figure><img className="lg:h-[200px] pt-1 lg:w-[220px] rounded-full" src="https://i.ibb.co/Rjx9cyF/images-9.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="font-bold card-title">jimlan.smith</h2>
        <p className="font-bold ">Email: Jimla1222@gmail.com</p>
        <div className="justify-center card-actions">
            <button className="w-full text-xl text-white bg-green-500 btn ">view Details</button>
        </div>
    </div>
</div>


<div data-aos="fade-down" className="border-2 border-green-500 shadow-xl card card-compact bg-base-100">
    <figure><img className="lg:h-[200px] pt-1 lg:w-[220px] rounded-full" src="https://i.ibb.co/NZV6C5W/download-1.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="font-bold card-title">Jsmith</h2>
        <p className="font-bold">Email: jsmithjhon122@gmail.com</p>
        <div className="justify-end card-actions">
            <button className="w-full text-xl text-white bg-green-500 btn ">View Details</button>
        </div>
    </div>
</div>

<div data-aos="fade-up" className="border-2 border-green-500 shadow-xl card card-compact bg-base-100">
    <figure><img className="lg:h-[200px] pt-1 lg:w-[220px] rounded-full" src="https://i.ibb.co/HYx8MXV/download-2.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="font-bold card-title">Smith.john!</h2>
        <p className="font-bold">Email: smithjhon122@gmail.com</p>
        <div className="justify-end card-actions">
            <button className="w-full text-xl text-white bg-green-500 btn ">View Details</button>
        </div>
    </div>
</div>

<div data-aos="fade-down" className="border-2 border-green-500 shadow-xl card card-compact bg-base-100">
    <figure><img className="h-[200px] pt-1 w-[220px] rounded-full" src="https://i.ibb.co/5kR0BHf/download-3.jpg" alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="font-bold card-title">Johns</h2>
        <p className="font-bold">Email: jhon122@gmail.com</p>
        <div className="justify-end card-actions">
            <button className="w-full text-xl text-white bg-green-500 btn ">View Details</button>
        </div>
    </div>
</div>
</div>





            


        <div className="mt-5">
          <p className="mt-10 text-xl font-bold text-center text-green-500">If you want to contact us and know about our jobs then <br /> you can contact this address</p>
          <Properties></Properties>
        </div>
      </div>
    </div>
  );
};

export default Home;
