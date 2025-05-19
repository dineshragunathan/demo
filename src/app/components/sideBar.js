
import { Home, Calendar, ClipboardList, BarChart2 } from "lucide-react";

export default function SideBar() {
    return (
        <div className="bg-gray-800 h-screen w-[15vw] text-gray-100 px-4 py-6 shadow-md flex flex-col">
            <h2 className="text-2xl font-semibold mb-8 text-center text-white tracking-wide">
                Navigations
            </h2>
            <ul className="space-y-4">
                <li className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition-all cursor-pointer text-lg">
                    <Home className="h-5 w-5" />
                    Dashboard
                </li>
                <li className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition-all cursor-pointer text-lg">
                    <Calendar className="h-5 w-5" />
                    Schedule
                </li>
                <li className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition-all cursor-pointer text-lg">
                    <ClipboardList className="h-5 w-5" />
                    Leave Management
                </li>
                <li className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition-all cursor-pointer text-lg">
                    <BarChart2 className="h-5 w-5" />
                    My Analytics
                </li>
            </ul>
        </div>
    );
}
