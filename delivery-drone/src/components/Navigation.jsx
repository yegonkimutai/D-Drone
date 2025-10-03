import { MdMyLocation } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoNavigateOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

const Navigation = () => {
  return (
    <div>
        <div>
            <h1>Live Tracking</h1>
            <button><MdMyLocation />My Location</button>
        </div>
        <div>
            <input 
                type="text"
                placeholder="Search location or adress..."
            />
            <button>Search</button>
        </div>
        <div>
            <button><IoLocationOutline /> Set Pickup</button>
            <button><IoNavigateOutline /> Navigate</button>
        </div>
        <div>
            <IoLocationOutline />
            Interactive Map View
        </div>
        <div>
        <h2><CiDeliveryTruck /> Active Deliveries</h2>
        <div>
        <div>
            <p>Medical Supplies</p>
            <p>Downtown District</p>
        </div>
        <div>
            <p>in transit</p>
            <p><IoMdTime />12 minutes</p>
        </div>
        </div>
        <div>
        <div>
            <p>Groceries</p>
            <p>Warehouse A</p>
        </div>
        <div>
            <p>preparing</p>
            <p><IoMdTime />25 minutes</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Navigation