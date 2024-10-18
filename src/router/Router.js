import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { useAuth } from "../context/AuthContext";
import Login from "../page/login/Login";
import Browse from "../page/search/Browse";
import { AudioProvider } from "../context/AudioContext";
import Error404 from "../page/error/404/Error404";
import Download from "../page/download/Download";
import Home from "../page/home/Home";

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
                        <Home />
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
                        <Download />
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
                path: "search",
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
