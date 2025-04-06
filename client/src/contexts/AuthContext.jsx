import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            const decoded = jwt_decode(token);
            setUser(decoded);
            return decoded;
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwt_decode(token);
                setUser(decoded);
            } catch (error) {
                localStorage.removeItem('token');
            }
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };