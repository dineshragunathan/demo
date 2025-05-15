import Sidebar from "./components/sideBar";
import Header from "./components/header"
export default function Home() {
  return (
    <>
      <Header />
      <div className="h-screen w-screen flex flex-row">
        <Sidebar />
        <div className="bg-white h-screen w-screen text-black text-3xl p-5 overflow-scroll">
          Faculty Name
          <div className="flex flex-row gap-5 w-full mt-3">
            <div className=" bg-gray-500 w-[25%] h-[12vh] rounded-md flex items-center justify-center text-white">
              box 1
            </div>
            <div className=" bg-gray-500 w-[25%] h-[12vh] rounded-md flex items-center justify-center text-white">
              box 2
            </div >
            <div className=" bg-gray-500 w-[25%] h-[12vh] rounded-md flex items-center justify-center text-white">
              box 3
            </div>
            <div className=" bg-gray-500 w-[25%] h-[12vh] rounded-md flex items-center justify-center text-white">
              box 4
            </div>
          </div>
          <div className="bg-gray-400 h-[45vh] my-5 rounded-md text-white flex items-center justify-center">
            Reports 1
          </div>
          <div className="bg-gray-400 h-[45vh] my-5 rounded-md text-white flex items-center justify-center">
            Reports 2
          </div>
        </div>
      </div>
    </>
  );
}
