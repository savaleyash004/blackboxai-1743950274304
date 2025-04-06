import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
                <nav>
                    <ul className="space-y-2">
                        <li>
                            <a href="/admin/products" className="block py-2 px-4 hover:bg-gray-700 rounded">
                                Product Management
                            </a>
                        </li>
                        <li>
                            <a href="/admin/inquiries" className="block py-2 px-4 hover:bg-gray-700 rounded">
                                Client Inquiries
                            </a>
                        </li>
                        <li>
                            <a href="/admin/content" className="block py-2 px-4 hover:bg-gray-700 rounded">
                                Content Management
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 bg-gray-100">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;