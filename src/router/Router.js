import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import {useAuth} from "../util/AuthContext";
import Login from "../page/Login";

const ProtectedRoute = ({ children }) => {
    console.log("child", children)
    console.log("useauth", useAuth())
    const { isLoggedIn } = useAuth();
    console.log("isLoggedIn", isLoggedIn)
    return isLoggedIn ? children : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "home",
                element: (
                    <ProtectedRoute>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>Home</div>
                    </ProtectedRoute>
                )
            },
            {
                path: "likes",
                element: (
                    <ProtectedRoute>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>Likes</div>
                    </ProtectedRoute>
                )
            },
            {
                path: "download",
                element: (
                    <ProtectedRoute>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>Download</div>
                    </ProtectedRoute>
                )
            },
            {
                path: "library",
                element: (
                    <ProtectedRoute>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>Library</div>
                    </ProtectedRoute>
                )
            },
            {
                path: "browse",
                element: (
                    <ProtectedRoute>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>Browse</div>
                    </ProtectedRoute>
                )
            },
            {
                path: "local",
                element: (
                    <ProtectedRoute>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>Local</div>
                    </ProtectedRoute>
                )
            },
            // Redirection de base
            {
                index: true,
                element: <Navigate to="/login" replace />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
]);

export default router;
