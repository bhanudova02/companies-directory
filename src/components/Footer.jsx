export function Footer() {
    return (
        <div className="bg-gray-100 text-gray-600 text-center py-1.5 border-t border-gray-200">
            <p className="text-[13px] md:text-[14px] font-medium">
                Copyright © {new Date().getFullYear()} - All rights reserved | Companies Directory
            </p>
        </div>
    )
}