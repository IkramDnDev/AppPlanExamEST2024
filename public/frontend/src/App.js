import React, { useState, useEffect } from 'react';
import './App.css'; 
import Content from './components/Content';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from "./pages/Login";
import { AuthContext } from "./context/AuthContext"; // Importez le contexte d'authentification

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // État de l'authentification

    useEffect(() => {
        // Vérifiez si l'utilisateur est déjà connecté (par exemple, vérifiez s'il existe un token JWT dans le stockage local)
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Login />} /> 
                <Route path="/home/*" element={<ProtectedRoutes isLoggedIn={isLoggedIn} />} /> 
            </Routes>
        </div>
    );
}

function ProtectedRoutes({ isLoggedIn }) {
    if (!isLoggedIn) {
        return <Navigate to="/home" />;
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn }}>
            <AuthenticatedApp />
        </AuthContext.Provider>
    );
}

function AuthenticatedApp() {
    return (
        <div className="app">
            <SideBar />
            <div className="main-content">
                <TopBar />
                <Content />
            </div>
        </div>
    );
}
