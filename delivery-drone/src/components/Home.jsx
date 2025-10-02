import { IoSettingsOutline } from "react-icons/io5";
import { VscRobot } from "react-icons/vsc";
import { FiPackage } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center p-4 mb-18'>
    <div className='w-full mb-6'>
        <h1 className='text-4xl text-center mb-2'>DroneExpress</h1>
        <p className='text-gray-500 text-center'>Fast, Reliable drone delivery at your convinience</p>
        <div className=' absolute right-5 top-8'>
        <button className='p-2 hover:bg-gray-200 cursor-pointer rounded-md'><VscRobot className='w-5 h-5' /></button>
        <button className='p-2 hover:bg-gray-200 cursor-pointer rounded-md'><IoSettingsOutline className='w-5 h-5' /></button>
        </div>
    </div>
    <div className='bg-gradient-to-r from-blue-50 to-purple-50 w-full flex flex-col justify-center items-center border-1 p-6 rounded-md'>
    <span><FiPackage className='w-20 h-20 text-sky-700' /></span>
      <p className='p-2 text-xl'>Ready to send a package?</p>
      <p className='p-2 text-gray-500 text-lg'>Schedule Drone Delivery</p>
      <button className='border-1 w-full bg-gray-950 text-white rounded-lg p-2 hover:'>Book Delivery</button>
    </div>
    <div className='flex w-full justify-center items-center gap-5 mt-4'>
      <button className='border-1 w-full p-4 rounded-md'><span className='font-bold text-2xl'>47</span> <br/>Total deliveries</button>
      <button className='border-1 w-full p-4 rounded-md'><span className='font-bold text-2xl'>4.8</span>⭐<br /> Avg Rating</button>
      <button className='border-1 w-full p-4 rounded-md'><span className='font-bold text-2xl'>96%</span> <br/> On Time</button>
    </div>
    <div className='border-1 rounded-md w-full mt-6 p-5'>
    <h2 className='flex gap-2'><CiClock2 className="fond-bold text-2xl"/>Recent Deliveries</h2>
      <div className='flex items-center w-full border-1 bg-gray-100 gap-4 p-3 rounded-lg mt-3'>
        <IoMdCheckmarkCircleOutline className="text-green-400 text-xl" />
        <p className="flex flex-col gap-2">
          <span>Electronic package</span>
         <span className="text-gray-500"> 2024-01-15</span>
        </p>
        <p className="flex flex-col ml-auto">
          <span className="border-1 text-center rounded-lg text-green-500 p-1">delivered</span>
          <span className="text-xs">⭐⭐⭐⭐⭐</span>
        </p>
      </div>
       <div className='flex items-center w-full border-1 bg-gray-100 gap-4 p-3 rounded-lg mt-3'>
        <IoMdCheckmarkCircleOutline className="text-green-400 text-xl" />
        <p className="flex flex-col gap-2">
          <span>Groceries</span>
         <span className="text-gray-500"> 2024-01-14</span>
        </p>
        <p className="flex flex-col ml-auto">
          <span className="border-1 text-center rounded-lg text-green-500 p-1">delivered</span>
          <span className="text-xs">⭐⭐⭐⭐</span>
        </p>
      </div>
       <div className='flex items-center w-full border-1 bg-gray-100 gap-4 p-3 rounded-lg mt-3'>
        <CiDeliveryTruck className="text-blue-500 text-xl" />
        <p className="flex flex-col gap-2">
          <span>Medical Supplies</span>
         <span className="text-gray-500"> 2024-01-13</span>
        </p>
        <p className="flex flex-col ml-auto">
          <span className="border-1 border-gray-300 p-1 rounded-lg bg-gray-300 text-blue">in transit</span>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Home