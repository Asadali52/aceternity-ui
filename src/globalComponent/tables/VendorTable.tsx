"use client"
import React, { useState } from "react";
import { VendorListTableData } from "@/utitlis/MockData";

type Props = {
  tableHeight?: string;
  showPagination?: boolean;
}

const VendorListTable = ({ tableHeight = "100vh" }: Props) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getAssignedClasses = (assigned: string) => {
    switch (assigned) {
      case 'Assign':
        return 'text-[#0a96d4]';
      default:
        return 'text-[#7D7D7D]';
    }
  };

  const getStatusClasses = (status: string) => {
    switch (status) {
      case 'Assigned':
        return 'bg-[#ceeaf6] text-[#0a96d4]';
      case 'Unassigned':
        return 'bg-[#e5e5e5] text-[#7d7d7d]';
      default:
        return '';
    }
  };

  const handleAssignedClick = (item: any) => {
    if (item.assigned === 'Assign') {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full border border-[#E9E9E9] rounded-[10px] authlayout-shadow">
      <div className="w-full text-black font-[600] text-[20px] flex justify-between items-center px-6 py-4 border-b border-[#E9E9E9]">
        <p>Vendor List</p>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="w-full" style={{ maxHeight: tableHeight }}>
          <table className="w-full text-center rtl:text-right">
            <thead className="text-black text-center border-b border-[#E9E9E9] text-[15px] max-[880px]:text-[14px] font-thin bg-[#F8F8F8] sticky top-0">
              <tr>
                <th scope="col" className="px-4 whitespace-nowrap py-6 flex justify-center">
                  <div className="flex items-center gap-4">
                    <input
                      id="select-all"
                      type="checkbox"
                      className="h-[15px] w-[15px] cursor-pointer accent-[#0A96D4] rounded-[5px]"
                    />
                    <label htmlFor="select-all">Vendor ID#</label>
                  </div>
                </th>
                <th scope="col" className="px-4 whitespace-nowrap py-6">Vendor Name</th>
                <th scope="col" className="px-4 whitespace-nowrap py-6">Phone</th>
                <th scope="col" className="px-4 whitespace-nowrap py-6">Office Name</th>
                <th scope="col" className="px-4 whitespace-nowrap py-6">Email Address</th>
                <th scope="col" className="px-4 whitespace-nowrap py-6">Status</th>
                <th scope="col" className="px-4 whitespace-nowrap py-6">Assigned to</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {VendorListTableData.map((item) => (
                <tr key={item.id} className="border-b border-[#E9E9E9]">
                  <td className="text-[#7D7D7D] text-[14px] max-[880px]:text-[12px] font-[400] whitespace-nowrap px-4 py-5">
                    <label className="flex items-center gap-4 justify-center">
                      <input
                        id="Brand1-checkbox"
                        type="checkbox"
                        value="Brand1-checkbox"
                        className="w-[15px] h-[15px] cursor-pointer accent-[#0A96D4] rounded-[5px]"
                      />
                      <p className="cursor-pointer">{item.vendorId}</p>
                    </label>
                  </td>
                  <td className="text-[#7D7D7D] text-[14px] max-[880px]:text-[12px] flex justify-center font-[400] whitespace-nowrap px-4 py-5 ">
                    <div className="flex items-center justify-start gap-2 w-[100px]">
                      <span>{item.vendorName}</span>
                    </div>
                  </td>
                  <td className="text-[#7D7D7D] text-[14px] max-[880px]:text-[12px] font-[400] whitespace-nowrap px-4 py-5">
                    {item.phone}
                  </td>
                  <td className="text-[#7D7D7D] text-[14px] max-[880px]:text-[12px] font-[400] whitespace-nowrap px-4 py-5">
                    {item.office}
                  </td>
                  <td className="text-[#7D7D7D] text-[14px] max-[880px]:text-[12px] font-[400] whitespace-nowrap px-4 py-5">
                    {item.email}
                  </td>
                  <td className="text-[12px] max-[880px]:text-[12px] font-[400] text-center px-4 py-5">
                    <span className={`font-[500] rounded-[5px] py-2 px-3 ${getStatusClasses(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td
                    className={`text-[14px] cursor-pointer max-[880px]:text-[12px] font-[400] whitespace-nowrap px-4 py-5 ${getAssignedClasses(item.assigned)}`}
                    onClick={() => handleAssignedClick(item)}
                  >
                    {item.assigned}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Assigned Details</h2>
            <p>Vendor ID</p>
            <p>Vendor Name</p>
            {/* Add more details as needed */}
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
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

export default VendorListTable;
