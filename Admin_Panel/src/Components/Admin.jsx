import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-8 text-center">Admin Panel</h2>
                <div className="flex justify-between">
                    
                        <Link to="/login">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                          Log In  </button>
                        </Link>
                    
                    
                    <Link to="/signup">
                        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">Sign Up</button>
                    </Link>
                   
                </div>
            </div>
        </div>
    );
};

export default Admin;
