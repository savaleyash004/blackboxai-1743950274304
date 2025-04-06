import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gray-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">Advanced MPI Solutions</h1>
                    <p className="text-xl mb-8">Precision magnetic particle inspection equipment for industrial applications</p>
                    <Link 
                        to="/contact" 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
                    >
                        Request a Quote
                    </Link>
                </div>
            </section>

            {/* USP Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-bold mb-2">1000+ Machines</h3>
                            <p>Delivered worldwide to satisfied customers</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-bold mb-2">ISO Certified</h3>
                            <p>Manufacturing processes meet international standards</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-bold mb-2">Custom Solutions</h3>
                            <p>Tailored to your specific inspection needs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Preview */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="bg-gray-300 h-48 mb-4 rounded"></div>
                                <h3 className="text-xl font-bold mb-2">MPI Machine Model {item}</h3>
                                <p className="mb-4">High-performance magnetic particle inspection system</p>
                                <Link 
                                    to={`/products/${item}`} 
                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    View Details →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;