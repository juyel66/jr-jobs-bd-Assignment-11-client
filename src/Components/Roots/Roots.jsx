import { Outlet } from "react-router-dom";
import Header from "../Headers/Header";
import Footer from "../Footer/Footer";


const Roots = () => {
    return (
        <div>
             {/* className="lg:w-[1200px] mx-auto" */}
            <div> 
            {/* <div className="container  mx-auto min-h-[calc(100vh-272px)]"> */}
            {/* <div className="container mx-auto"> */}
            <div className="lg:w-[1200px] mx-auto"><Header></Header></div>
            <Outlet></Outlet>
            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Roots;