import React from 'react';

const Dashboard = () => {
  // Dummy data for demonstration
  const data = [
    { name: 'Sales', value: 150 },
    { name: 'Customers', value: 300 },
    { name: 'Orders', value: 500 },
    { name: 'Revenue', value: '$50,000' }
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map(item => (
          <div key={item.name} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
            <p className="text-xl">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;