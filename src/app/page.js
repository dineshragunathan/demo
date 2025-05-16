import Sidebar from "./components/sideBar";
import Header from "./components/header"
import Login from "./login/page"
export default function Home() {
  return (
    <>
      <Login />
      {/* <Header />
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
          <div className="w-full flex flex-row gap-5 my-5">
            <div className="w-[50%] h-[45vh] bg-gray-400 rounded-md flex items-center justify-center text-white">
              G1
            </div>
            <div className="w-[50%] h-[45vh] bg-gray-400 rounded-md flex items-center justify-center text-white">
              G2
            </div>
          </div>
          <div className="w-full flex flex-row gap-5 my-5">
            <div className="w-[50%] h-[45vh] bg-gray-400 rounded-md flex items-center justify-center text-white">
              G3
            </div>
            <div className="w-[50%] h-[45vh] bg-gray-400 rounded-md flex items-center justify-center text-white">
              G4
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
