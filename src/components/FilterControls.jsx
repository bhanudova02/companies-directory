import axios from "axios";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export function FilterControls({ setCompaniesList }) {
    const [companies, setCompanies] = useState([]);
    const [selectedIndustry, setSelectedIndustry] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    //Fetch companies once
    useEffect(() => {
        axios.get("./companies.json")
            .then(res => {
                setCompanies(res.data.compines_data);
                setCompaniesList(res.data.compines_data);
            })
            .catch(error => {
                console.error("Error fetching companies data:", error);
            });
    }, []);

    //Apply combined filters
    useEffect(() => {
        let filtered = companies;

        // Industry filter
        if (selectedIndustry) {
            filtered = filtered.filter(
                company => company.industry === selectedIndustry
            );
        }

        // Location filter
        if (selectedLocation) {
            filtered = filtered.filter(
                company => company.location.toLowerCase().includes(selectedLocation.toLowerCase())
            );
        }

        // Search filter (checks name, industry, and location)
        if (searchTerm.trim() !== "") {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(
                company =>
                    company.name.toLowerCase().includes(term) ||
                    company.industry.toLowerCase().includes(term) ||
                    company.location.toLowerCase().includes(term)
            );
        }

        setCompaniesList(filtered);
    }, [selectedIndustry, selectedLocation, searchTerm, companies]);

    return (
        <div className="shadow-xs pt-1 text-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-[7fr_5fr] gap-2">
                <div className="grid grid-cols-2 gap-2">
                    {/* Industry Filter */}
                    <div>
                        <select
                            value={selectedIndustry}
                            onChange={(e) => setSelectedIndustry(e.target.value)}
                            className="text-[14.5px] border border-zinc-200 p-1.5 md:p-2 rounded-sm w-full focus:outline-green-800 focus:outline bg-white"
                        >
                            <option value="">Select Industry</option>
                            <option value="IT Industry">IT Industry</option>
                            <option value="Non-IT Industry">Non-IT Industry</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Education">Education</option>
                            <option value="Manufacturing">Manufacturing</option>
                        </select>
                    </div>

                    {/* Location Filter */}
                    <div>
                        <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="text-[14.5px] border border-zinc-200 p-1.5 md:p-2 rounded-sm w-full focus:outline-green-800 focus:outline bg-white"
                        >
                            <option value="">Select Location</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Pune">Pune</option>
                        </select>
                    </div>
                </div>

                {/* Search Field */}
                <div className="text-[14.5px]">
                    <div className="relative w-full">
                        <Search className="absolute top-1/2 -translate-y-1/2 right-1 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search by company, industry, or location..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border border-zinc-200 py-[7px] px-3 rounded-sm w-full focus:outline-green-800 focus:outline bg-white text-black font-medium"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
