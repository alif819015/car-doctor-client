// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRout = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();

    if(user?.email){
        return children;
    }

    if(loader){
        return <progress className="progress w-56"></progress>;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
    
};

export default PrivateRout;