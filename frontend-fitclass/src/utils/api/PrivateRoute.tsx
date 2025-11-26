import type { JSX } from "react";
import { Navigate } from "react-router";
import { getRole, getToken } from "./auth";

type PrivateRouteProps = {
    children: JSX.Element; 
    allowedRoles?: string[];
};

export default function PrivateRoute({ children, allowedRoles }: PrivateRouteProps) {
    const token = getToken();
    const userRole = getRole();    
    
    if (!token) {
        return <Navigate to="/login" />;
    }

    if (allowedRoles && allowedRoles.length > 0) {
        if (!userRole || !allowedRoles.includes(userRole)) {
            return <Navigate to="/home" />; 
        }
    }
    
    return children;
}