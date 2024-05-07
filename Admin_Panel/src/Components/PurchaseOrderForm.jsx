
import React, { useState } from 'react';
import axios from 'axios';

const PurchaseOrderForm = () => {
    
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [pricing, setPricing] = useState('');
    const [mrp, setMRP] = useState('');
    const [customerId, setCustomerId] = useState('');

   
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3000/purchase',{productName,
        quantity,
        pricing,
        mrp,
        customerId})
        .then(res => {
           console.log(res)
        })
        .catch(err=> console.log(err));
        
        console.log({
            productName,
            quantity,
            pricing,
            mrp,
            customerId
        });
        
        setProductName('');
        setQuantity('');
        setPricing('');
        setMRP('');
        setCustomerId('');
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">Create Purchase Order</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                        type="text"
                        id="productName"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="pricing" className="block text-sm font-medium text-gray-700">Pricing</label>
                    <input
                        type="text"
                        id="pricing"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={pricing}
                        onChange={(e) => setPricing(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="mrp" className="block text-sm font-medium text-gray-700">MRP</label>
                    <input
                        type="text"
                        id="mrp"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={mrp}
                        onChange={(e) => setMRP(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="customerId" className="block text-sm font-medium text-gray-700">Customer ID</label>
                    <input
                        type="text"
                        id="customerId"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)}
                        required
                    />
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Create Purchase Order
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PurchaseOrderForm;

