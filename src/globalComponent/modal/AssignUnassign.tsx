"use client"

import React, { useState } from 'react';

const StatusTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStatusClick = (status: string) => {
    if (status === 'assign') {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const data = [
    { id: 1, status: 'assign' },
    { id: 2, status: 'unassign' },
    // Add more data as needed
  ];

  return (
    <div className="p-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td
                className={`py-2 px-4 cursor-pointer ${
                  item.status === 'assign' ? 'text-green-500' : 'text-red-500'
                }`}
                onClick={() => handleStatusClick(item.status)}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl mb-4">Assign Details</h2>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusTable;
