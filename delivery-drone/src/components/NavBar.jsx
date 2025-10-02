import { NavLink } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import { TbMap2 } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="flex justify-center items-center p-5 fixed bottom-0 bg-white w-full">
        <ul className="flex gap-3 w-full text-center">
            <li className="w-full"><NavLink to='/ ' className="flex flex-col items-center justify-center"><IoHomeOutline className="w-5 h-5" />Home</NavLink></li>
            <li className="w-full"><NavLink to='/maps' className="flex flex-col items-center justify-center"><TbMap2 className="w-5 h-5" />Maps</NavLink></li>
            <li className="w-full"><NavLink to='/notifications' className="flex flex-col items-center justify-center"><IoIosNotificationsOutline className="w-5 h-5" />Notifications</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavBar