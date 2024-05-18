// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";
// import { updateProfile } from "firebase/auth";
// import { useForm } from "react-hook-form";
// import { useContext, useState } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { createUser, user,loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
      if(user){
        navigate('/')
      }
    },[navigate, user])
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm(); 
  
    const onSubmit = (data) => {
      const { name, email, photo, password } = data;
      // console.log(name,photo) 
      createUser(email, password) 
        .then((result) => { 
  
          toast.success('Register Success')
        // alert("Register Success")
           
          console.log(result?.user); 
          updateProfile(result.user,{ 
            displayName: name,
            photoURL: photo,
  
            }).then(() => {
  
              // toast("Register Successful", {
              //     theme: "colored",
              //     autoClose: 5000,
                  
              //   });
  
              // toast.success('Profile update successful')
                navigate(location?.state ? location.state : "/");
  
                
          }).catch((error) => {
            console.error(error.message);
            
          });
        })
        .catch((error) => {
          console.error(error.message);
        
        });
    };


    if(user || loading) return <div className="flex mt-40 justify-center"><span className="loading  loading-spinner w-40 "></span> </div>



  return (
    <div>
      <div>
        {/* <Helmet>
          <title>Register</title>
        </Helmet> */}
        <div>
          <div className="hero  ">
            <div className="hero-content flex-col ">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold"> Please Register now!</h1>
              </div>
              <div className="card border-2 border-gray-400 bg-gray-100 shrink-0 w-full max-w-sm shadow-2xl ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="input input-bordered"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Please enter your valid photo URL"
                      className="input input-bordered"
                      {...register("photo", { required: true })}
                    />
                    {errors.photo && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input relative  input-bordered"
                      {...register("password", {
                        pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
                      })}
                    />

                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute lg:ml-[280px] ml-[240px] mt-[53px]"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                    {errors.password && (
                      <span className="text-red-600">
                        Password must contain at least one uppercase letter and
                        one lowercase letter, and be at least 6 characters long
                      </span>
                    )}
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>

                  {/* <div>
                                <p className="text-red-500">{match}</p>
                                <p className="text-red-500">{length}</p>
                            </div> */}
                  <div className="form-control mt-6">
                    <button className="btn btn-primary text-xl">
                      Register
                    </button>
                  </div>
                </form>
                <p className="p-4">
                  Already have an account Please
                  <Link className="text-blue-600 hover:underline" to="/login">
                    {" "}
                    Login
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <ToastContainer></ToastContainer> */}
      </div>
    </div>
  );
};

export default Register;