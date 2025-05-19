'use client';
import Header from "./components/header";
import Sidebar from "./components/sideBar";
import Link from "next/link";

export default function Dashboard() {
    return (
        <>
            <Header />
            <div className="h-screen w-screen flex">
                <Sidebar />
                <div className="bg-white flex-1 text-black p-8 overflow-y-auto">
                    <h1>Hello John Doe!</h1>

                    <div className="flex flex-row w-full h-[40%] gap-5 m-3 ml-0">

                        <Link
                            href="/"
                            className="h-full w-[50%] bg-gray-300 rounded-md flex justify-center items-center hover:border-2 border-blue-600 transition-all duration-100"
                        >
                            Your Schedule
                        </Link>


                        <Link
                            href="../leave"
                            className="h-full w-[50%] bg-gray-300 rounded-md flex justify-center items-center hover:border-2 border-blue-600 transition-all duration-100"
                        >
                            Leave Management
                        </Link>
                    </div>

                    <div className="flex flex-row w-full h-[40%] gap-5 my-6 m-3 ml-0">

                        <Link
                            href="/"
                            className="h-full w-[50%] bg-gray-300 rounded-md flex justify-center items-center hover:border-2 border-blue-600 transition-all duration-100"
                        >
                            Activity Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
