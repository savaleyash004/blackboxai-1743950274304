import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import HomePage from './components/Client/HomePage';
import Login from './pages/Login';
import Error404 from './pages/Error404';
import Dashboard from './components/Admin/Dashboard';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;