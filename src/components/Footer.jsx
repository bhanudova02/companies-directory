export function Footer() {
    return (
        <div className="bg-white h-full md:bg-gray-100 text-gray-600 text-center py-0 md:py-1.5 border-t border-gray-200">
            <p className="text-[13px] md:text-[14px] font-medium mt-3 mb-1 md:mb-0 md:mt-0">
                Copyright © {new Date().getFullYear()} - All rights reserved | Companies Directory
            </p>
        </div>
    )
}