import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const Login = () => {

    const [showPasswordA , setShowPassword] = useState(false);

    const { signInUser, googleLogin, githubLogin,user,loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log('location in the login page', location);
    useEffect(()=>{
      if(user){
        // navigate('/')
        navigate(location?.state ? location.state : "/")
      }
    },[navigate, user,location])
  
    const {
      register, handleSubmit, formState: { errors }, } = useForm()
  
    const onSubmit = (data) => {
      const { email, password } = data;
      signInUser(email, password)
        .then(result => {
          console.log(result.user);
          // alert("Login Successful")
          // alert("Login Successful")
  
  
          // navigate after user 
          navigate(location?.state ? location.state : "/")
          toast.success('Login Success')
  
        })
        .catch(error => {
          console.error(error.message);
          // alert('')
          toast.error('Invalid user and password')
        })
  
  
  
  
    };


    const handleGoogleLogin = () => {
        googleLogin()
          .then(result => {
            console.log(result.user)
            toast.success('google login successful')
            navigate(location?.state ? location.state : "/")
            
          })
          .catch(error => {
            console.error(error)
            toast.error('Firebase google Login Problem')
          })
    
      }
      



      const handleGithubLogin = () => {
        githubLogin()
          .then(result => {
            console.log(result.user)
            toast.success('Github login successful')
            navigate(location?.state ? location.state : "/")
          })
          .catch(error => {
            console.error(error)
          })
      }

      if(user || loading) return <div className="flex mt-40 justify-center"><span className="loading  loading-spinner w-40 "></span> </div>
    return (
        <div>
                <div>
      <Helmet><title>Login</title></Helmet>
      <div>

        <div className="hero  ">
          <div className="hero-content  flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Please Login now!</h1>

            </div>
            <div className="card shrink-0 border-2 bg-gray-100 border-gray-400 w-full max-w-sm shadow-2xl ">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered"{...register("email", { required: true })} />
                  {errors.email && <span className="text-red-600">This field is required</span>}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type={showPasswordA ? "text": "password"}
                   name="password"
                    placeholder="password" 
                    className="input input-bordered" {...register("password", { required: true })} />
                    
                    <span onClick={()=>setShowPassword(!showPasswordA)} className="absolute lg:ml-[280px] ml-[280px] mt-[53px]">
                                        {
                                            showPasswordA ? 
                                            <FaEye />:
                                        <FaEyeSlash />
                                        }
                                    </span>

                  {errors.password && <span className="text-red-600">This field is required</span>}

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div>
                {/* <SocialLogin></SocialLogin> */}
                <div className="text-center">

                  <div className="space-y-2">
                    <button onClick={() => handleGoogleLogin()} className="btn btn-outline text-[18px] "> <FcGoogle></FcGoogle>  Sign in with google</button>
                    <button onClick={() => handleGithubLogin()} className="btn btn-outline text-[18px] "> <FaGithub></FaGithub>  Sign in with Github</button>
                  </div>

                </div>

                
              </div>
              <p className="p-4">Do not have an account Please <Link className="text-blue-600 hover:underline" to="/register"> Register</Link> </p>

            </div>

          </div>
        </div>
        {/* <ToastContainer></ToastContainer> */}


      </div>


    </div>
            
        </div>
    );
};

export default Login;