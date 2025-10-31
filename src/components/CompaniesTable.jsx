import { useState, useEffect } from "react";
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";

export function CompaniesTable({ companies_data }) {
    const [data, setData] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);

    // Update when parent data changes
    useEffect(() => {
        setData(companies_data || []);
        setCurrentPage(1); // Reset to first page when new data arrives
    }, [companies_data]);

    //Reverse data order
    const handleSort = () => {
        setData((prev) => [...prev].reverse());
    };

    // Change number of rows per page
    const handleRowsChange = (e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    // Pagination calculations
    const totalPages = Math.ceil(data.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const displayedData = data.slice(startIndex, endIndex);

    // Previous Page
    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    // Next Page
    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    return (
        <div className="h-full flex flex-col bg-white text-zinc-800 rounded-sm overflow-hidden border border-gray-200">
            <div className="flex-1 overflow-auto">
                <table className="w-full">
                    <thead className="bg-[#f9fafb] sticky top-0 z-10 text-[14px]">
                        <tr className="border-b border-gray-200">
                            <th className="p-2">Name</th>
                            <th>Industry</th>
                            <th>Location</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedData && displayedData.length > 0 ? (
                            displayedData.map((company, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-100 hover:bg-gray-50 text-center text-[13.7px]"
                                >
                                    <td className="px-4 md:px-1.5 md:p-1.5">{company.name}</td>
                                    <td className="px-4 md:px-1.5 md:p-1.5">{company.industry}</td>
                                    <td className="px-4 md:px-1.5 md:p-1.5">{company.location}</td>
                                    <td className="px-4 md:px-1.5 md:p-1.5">
                                        <a
                                            href={`https://${company.website}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            {company.website}
                                        </a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center text-gray-500 py-10 font-semibold">
                                    No data available...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer Controls */}
            <div className="bg-blue-100/50 flex justify-between pt-1.5 pb-1 px-4 text-[14.4px]">
                <div className="flex items-center gap-3 my-auto">
                    {/* Rows per page dropdown */}
                    <select
                        value={rowsPerPage}
                        onChange={handleRowsChange}
                        className="border border-gray-300 focus:outline-none bg-white text-black rounded-sm px-1.5 py-0.5"
                    >
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>

                    {/* Reverse Button */}
                    <button
                        onClick={handleSort}
                        className="flex items-center gap-1 border border-gray-300 rounded-sm bg-white px-2 py-0.5 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                        <ArrowUpDown className="w-4 h-4" />
                        <span className="hidden md:block">Reverse</span>
                    </button>
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <span>
                            {startIndex + 1}-{Math.min(endIndex, data.length)}
                        </span>
                        <span>of</span>
                        <span>{data.length}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className={`p-1 rounded-md transition-colors cursor-pointer ${
                                currentPage === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200"
                            }`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className={`p-1 rounded-md transition-colors cursor-pointer ${
                                currentPage === totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200"
                            }`}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
