import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">MPI Solutions</Link>
                
                <div className="flex space-x-4">
                    {user ? (
                        <>
                            {user.role === 'admin' && (
                                <Link to="/admin/dashboard" className="hover:text-gray-300">
                                    Dashboard
                                </Link>
                            )}
                            <button 
                                onClick={handleLogout}
                                className="hover:text-gray-300"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="hover:text-gray-300">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;