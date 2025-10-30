import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import { companies_info_data } from "../lib/companies";

export function CompaniesTable() {
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
                        {companies_info_data.map((company, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 text-center text-[13.7px]">
                                <td className="p-1.5">{company.name}</td>
                                <td>{company.industry}</td>
                                <td>{company.location}</td>
                                <td>
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
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-blue-100/50 flex justify-between pt-1.5 pb-1 px-4 text-[14.4px]">
                <div className="flex items-center gap-3 my-auto">
                    <select className="border border-gray-300 focus:outline-none bg-white text-black rounded-sm px-1.5 py-0.5">
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>

                    {/* Sort button */}
                    <button className="flex items-center gap-1 border border-gray-300 rounded-sm bg-white px-2 py-0.5 hover:bg-gray-200 transition-colors cursor-pointer">
                        <ArrowUpDown className="w-4 h-4" />
                        <span className="hidden md:block">Sort By</span>
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <span>1-4</span>
                        <span>of</span>
                        <span>4</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="p-1 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="p-1 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}