import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p>© {new Date().getFullYear()} MPI Solutions. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="hover:text-gray-300">Terms</a>
                    <a href="#" className="hover:text-gray-300">Privacy</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;