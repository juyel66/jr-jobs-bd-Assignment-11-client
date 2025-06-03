import { useContext, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";


const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme || "light";
      });
    
      // dark and light mode
    
      useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
      }, [theme]);
    
      const handleToggle = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
      };
    
      // dark and light mode end function

    const handleLogout = () => {
        logOut()
          .then(() => {
            toast.error("User logged out successfully");
          })
          .catch((error) => {
            console.error(error.message);
          });
      };
    const links = (
        <>
          <li > <NavLink className={({ isActive }) =>isActive? "btn btn-outline btn-success text-bold text-xl" : "text-xl font-bold"} to="/">Home</NavLink>
         </li>
         <li> <NavLink className={({ isActive }) =>isActive? "btn btn-outline btn-success text-bold text-xl" : "text-xl font-bold"} to="/allJob">All Jobs</NavLink>
           </li>
       { user &&
           <div className="lg:flex">
          
            <li> <NavLink className={({ isActive }) =>isActive? "btn btn-outline btn-success text-bold text-xl" : "text-xl font-bold"} to="/appliedJob">Applied Jobs</NavLink>
           </li>
            <li> <NavLink className={({ isActive }) =>isActive? "btn btn-outline btn-success text-bold text-xl" : "text-xl font-bold"} to="/addAJob">Add A Job</NavLink>
           </li>
            <li> <NavLink className={({ isActive }) =>isActive? "btn btn-outline btn-success text-bold text-xl" : "text-xl font-bold"} to="/myJobs">My Jobs</NavLink>
           </li>
           </div>
       }
          <li> <NavLink className={({ isActive }) =>isActive? "btn btn-outline btn-success text-bold text-xl" : "text-xl font-bold"} to="/blogs">Blogs</NavLink>
         </li>
          <li> <NavLink className={({ isActive }) =>isActive? "btn btn-outline btn-success text-bold text-xl" : "text-xl font-bold"} to="/ContactUs">Contact Us</NavLink>
         </li>
        </>
    )
    return (
        <div>
                <div>
      <div className="navbar rounded-xl ">
        <div className="navbar-start">
          <div className="z-50 dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <img className="border-2 border-pink-600 w-11 h-11 rounded-2xl" src='https://i.ibb.co/Zf1n58f/imresizer-1715263855167.jpg' alt="" />
          <a className=" ml-1 flex lg:hidden lg:text-xl text-[14px] lg:font-extrabold font-bold rounded-xl object-fill    lg:w-[180px] w-[100px] ">
            JR Jobs
          </a>
          <a className=" lg:flex hidden ml-1 lg:text-xl text-[14px] lg:font-extrabold font-bold rounded-xl object-fill    lg:w-[180px] w-[100px] ">
            JR Jobs BD
          </a>
          
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{links}</ul>
        </div>
        <div className="space-x-3 navbar-end">
      

<label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input 
  onChange={handleToggle}
  checked={theme === "dark"}

  type="checkbox"
   className="theme-controller" 
    />
  
  {/* sun icon */}
  <svg className="w-10 h-10 fill-current swap-off" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="w-10 h-10 fill-current swap-on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>



          {user ? (
            <div className="">
              <div className="z-50 dropdown dropdown-hover">
                <Link>
                  <div tabIndex={0} role="" className="m-1 ">
                    <img
                      className="hidden w-10 h-10 border-2 border-green-500 rounded-full lg:flex"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                </Link>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1]  text-left menu p-2 shadow  rounded-box lg:w-40   "
                >
                  <div className="bg-gray-300 border-2 rounded-xl ">
                    <li className="text-center text-black lg:text-xl">
                      {user.displayName}
                    </li>
                    <button
                      onClick={handleLogout}
                      className="h-8 ml-5 font-bold text-center text-black bg-gray-100 border-gray-800 lg:w-24 rounded-xl lg:text-xl"
                    >
                      Log Out
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <FaUserCircle className="h-16 w-11"></FaUserCircle>
          )}

          {user ? (
            <div className="">
              <button
                onClick={handleLogout}
                className="h-10 font-bold text-center text-black bg-gray-100 border-2 border-gray-800 lg:w-20 rounded-xl lg:text-xl"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex space-x-2">
              <div className="flex item-center">
                <Link
                  to="/login"
                  className="h-8 p-1 text-xl font-bold text-center text-black bg-gray-100 border-2 border-gray-800 btn lg:w-20 rounded-xl "
                >
                  Login
                </Link>
              </div>
              <div className="hidden lg:flex">
                <Link
                  to="/Register"
                  className="h-8 p-1 text-xl font-bold text-center text-black bg-gray-100 border-2 border-gray-800 btn lg:w-20 rounded-xl "
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

            
        </div>
    );
};

export default Header;