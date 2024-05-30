import { Outlet } from "react-router-dom";
import Header from "../Headers/Header";
import Footer from "../Footer/Footer";


const Roots = () => {
    return (
        <div>
             {/* className="lg:w-[1200px] mx-auto" */}
            <div> 
            {/* <div className="container  mx-auto "> */}
            {/* <div className="container mx-auto"> */}
            <div className="lg:w-[1200px] mx-auto "><Header></Header></div>
           <div className="min-h-[calc(100vh-272px)]">
           <Outlet></Outlet>
           </div>
            
            </div>
            <div className="">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Roots;