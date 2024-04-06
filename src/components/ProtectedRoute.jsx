import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {regUser} = useContext(AuthContext);
    if(regUser){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default ProtectedRoute;