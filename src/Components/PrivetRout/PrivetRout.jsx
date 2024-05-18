// import { Navigate, useLocation } from "react-router-dom";
// import UseAuth from "../Hooks/UseAuth";
// import PropTypes from 'prop-types';
// import { useContext } from "react";
// import { AuthContext } from "../Components/AuthProvider/AuthProvider";
// import { Navigate, useLocation } from 'react-router-dom';

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivetRout = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location.pathname)

    if(loading){
        return <div className="flex mt-40 justify-center"><span className="loading  loading-spinner w-40 "></span> </div>
    }
  
    

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login">

    </Navigate>
};
PrivetRout.propTypes ={
    children: PropTypes.node.isRequired
}

export default PrivetRout;