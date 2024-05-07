
import React, { useState } from 'react';
import axios from 'axios';

const Shipping = () => {
    
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [purchaseOrderId, setPurchaseOrderId] = useState('');
    const [customerId, setCustomerId] = useState('');

   
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3000/shipping',{ address,
        city,
        pincode,
        purchaseOrderId,
        customerId})
        .then(res => {
           console.log(res)
        })
        .catch(err=> console.log(err));
        
        console.log({
            address,
            city,
            pincode,
            purchaseOrderId,
            customerId
        });
        
        setAddress('');
        setCity('');
        setPincode('');
        setPurchaseOrderId('');
        setCustomerId('');
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">Add Shipping Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <input
                        type="text"
                        id="address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                    <input
                        type="text"
                        id="city"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
                    <input
                        type="text"
                        id="pincode"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="purchaseOrderId" className="block text-sm font-medium text-gray-700">Purchase Order ID</label>
                    <input
                        type="text"
                        id="purchaseOrderId"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={purchaseOrderId}
                        onChange={(e) => setPurchaseOrderId(e.target.value)}
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
                        Add Shipping Details
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Shipping;

