import Header from "../components/header"
import Sidebar from "../components/sideBar"

export default function Profile() {
    return (
        <>
            <Header />
            <div className="h-screen w-screen flex">
                <Sidebar />
                <div className="bg-white flex-1 text-black p-8 overflow-y-auto">
                    {/* Profile Overview */}
                    <div className="flex flex-row items-center gap-8 mb-10">
                        <div className="h-40 w-40 bg-gray-300 rounded-full flex items-center justify-center text-sm">
                            User Image
                        </div>
                        <div>
                            <ul className="space-y-2 text-lg">
                                <li><span className="font-semibold">Username:</span> John Doe</li>
                                <li><span className="font-semibold">Department:</span> VLSI</li>
                                <li><span className="font-semibold">Designation:</span> Assistant Professor</li>
                            </ul>
                        </div>
                    </div>

                    {/* Personal Details */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">Personal Details</h2>
                        <hr className="mb-4" />
                        <ul className="space-y-2 text-base">
                            <li><span className="font-semibold">PAN Number:</span> ABCDE1234F</li>
                            <li><span className="font-semibold">Aadhar Number:</span> 1234-5678-9012</li>
                        </ul>
                    </section>

                    {/* Professional Details */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">Professional Details</h2>
                        <hr className="mb-4" />
                        <ul className="space-y-2 text-base">
                            <li><span className="font-semibold">Qualification:</span> M.Tech</li>
                            <li><span className="font-semibold">Specialization:</span> VLSI Design</li>
                            <li><span className="font-semibold">Expertise in Subjects:</span> Digital Electronics, ASIC Design</li>
                        </ul>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                        <hr className="mb-4" />
                        <ul className="space-y-2 text-base">
                            <li><span className="font-semibold">Email:</span> john.doe@example.com</li>
                            <li><span className="font-semibold">Phone:</span> +91-9876543210</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    );
}
