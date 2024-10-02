import App from "@/App";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Homepage from '@/homepage/views/Index';
import ProtectedRoute from "@/homepage/components/ProtectedRoute";
import Login from "@/Login/views/Login";
import Register from "@/Register/views/Register";

export const routes = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '',
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: '',
                        element: <Navigate to={'/home'} />
                    },
                    {
                        path: 'home',
                        element: <Homepage />
                    },
                    {
                        path: 'login',
                        element: <Login />
                    },
                    {
                        path: 'register',
                        element: <Register />
                    }
                ]
            },
        ]
    }
])