import { Search } from "lucide-react";

export function FilterControls() {
    return (
        <div className="shadow-xs  pt-1  text-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-[7fr_5fr] gap-2">
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        {/* <label className="block mb-1 text-[15px] font-medium text-zinc-700">Select Industry</label> */}
                        <select className="text-[14.5px] border border-zinc-200 p-1.5 md:p-2 rounded-sm w-full focus:outline-green-800 focus:outline bg-white">
                            <option>Select Industry</option>
                            <option>IT Industry</option>
                            <option>Non-IT Industry</option>
                            <option>Healthcare</option>
                            <option>Education</option>
                            <option>Manufacturing</option>
                        </select>
                    </div>
                    <div>
                        {/* <label className="block mb-1 text-[15px] font-medium text-zinc-700">Select Location</label> */}
                        <select className="text-[14.5px] border border-zinc-200 p-1.5 md:p-2 rounded-sm w-full focus:outline-green-800 focus:outline bg-white">
                            <option>Select Location</option>
                            <option>IT Industry</option>
                            <option>Non-IT Industry</option>
                            <option>Healthcare</option>
                            <option>Education</option>
                            <option>Manufacturing</option>
                        </select>
                    </div>
                </div>
                <div className="text-[14.5px]">
                    {/* <label className="block mb-1 text-[15px] font-medium text-zinc-700">Search Company</label> */}

                    <div className="relative w-full">
                        <Search className="absolute top-1/2 -translate-1/2 right-1 text-gray-400 w-5 h-5" />
                        <input type="text" placeholder="Search by company name..."
                            className="border border-zinc-200 py-[7px] px-3 rounded-sm w-full focus:outline-green-800 focus:outline bg-white text-black font-medium" />
                    </div>
                </div>
            </div>
        </div>
    )
}