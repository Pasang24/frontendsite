import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes(props) {
    const role = localStorage.getItem("role");
    if(role){
        if (props.role === role){
            return <Outlet/>
        }
        return <h1>Forbidden Page</h1>
    }
    return <Navigate to="login" />
}

export default ProtectedRoutes