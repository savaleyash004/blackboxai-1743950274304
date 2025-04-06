import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const navigate = useNavigate();

    // Sample product data
    const products = [
        {
            id: 1,
            name: 'Bench-Type MPI Machine',
            category: 'bench',
            description: 'Stationary magnetic particle inspection system for laboratory use',
            price: '$25,000'
        },
        {
            id: 2,
            name: 'Coil-Type MPI System',
            category: 'coil',
            description: 'High-throughput inspection system for production lines',
            price: '$45,000'
        },
        {
            id: 3,
            name: 'Portable MPI Kit',
            category: 'portable',
            description: 'Compact solution for field inspections',
            price: '$12,000'
        }
    ];

    const filteredProducts = activeCategory === 'all' 
        ? products 
        : products.filter(product => product.category === activeCategory);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Our Product Catalog</h1>
            
            {/* Category Filter */}
            <div className="flex space-x-4 mb-8">
                <button 
                    onClick={() => setActiveCategory('all')}
                    className={`px-4 py-2 rounded ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                    All Products
                </button>
                <button 
                    onClick={() => setActiveCategory('bench')}
                    className={`px-4 py-2 rounded ${activeCategory === 'bench' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                    Bench-Type
                </button>
                <button 
                    onClick={() => setActiveCategory('coil')}
                    className={`px-4 py-2 rounded ${activeCategory === 'coil' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                    Coil-Type
                </button>
                <button 
                    onClick={() => setActiveCategory('portable')}
                    className={`px-4 py-2 rounded ${activeCategory === 'portable' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                    Portable
                </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                    <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="bg-gray-300 h-48 mb-4 rounded"></div>
                        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <p className="text-lg font-semibold mb-4">{product.price}</p>
                        <button 
                            onClick={() => navigate(`/products/${product.id}`)}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;