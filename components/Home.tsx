import { IoMenu } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { LuTicket, LuUsers, LuUser } from "react-icons/lu";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="flex items-center">
          <label htmlFor="my-drawer-2" className="lg:hidden">
            <IoMenu className="text-3xl" />
          </label>
          <Navbar />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <h1 className="mb-4">TICKET LEAD</h1>
          <li>
            <a>
              <RxDashboard /> Dashboard
            </a>
          </li>
          <li>
            <a>
              <LuUser /> Users
            </a>
          </li>
          <li>
            <a>
              <LuTicket /> Tickets
            </a>
          </li>
          <li>
            <a>
              <LuUsers /> Officials
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
