import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { useAuth } from "../context/AuthContext";
import Login from "../page/login/Login";
import Browse from "../page/Browse";
import { AudioProvider } from "../context/AudioContext";
import Error404 from "../page/error/404/Error404";

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? children : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AudioProvider>
                <MainLayout />
            </AudioProvider>
        ),
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
                        <Browse />
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
    },

    {
        path: "*",
        element: <Error404 />
    }
]);

export default router;
