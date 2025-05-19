'use client';
import Header from "./components/header";
import Sidebar from "./components/sideBar";
import Link from "next/link";

export default function Dashboard() {
    return (
        <>
            <Header />
            <div className="h-screen w-screen flex bg-gray-100">
                <Sidebar />
                <div className="flex-1 p-8 overflow-y-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-10">Welcome, John Doe</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <DashboardLink href="/" title="Your Schedule" />
                        <DashboardLink href="../leave" title="Leave Management" />
                        <DashboardLink href="/" title="Activity Dashboard" />
                    </div>
                </div>
            </div>
        </>
    );
}

function DashboardLink({ href, title }) {
    return (
        <Link
            href={href}
            className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition duration-200 text-center text-lg font-medium text-gray-700"
        >
            {title}
        </Link>
    );
}
