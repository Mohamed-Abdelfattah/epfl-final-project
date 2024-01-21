import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    // <!-- Sidebar -->
    <aside
      id="sidebar"
      className="bg-white text-gray-800 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
    >
      {/* <!-- User info for larger screens --> */}
      <div className="hidden md:flex flex-col items-center px-4 ">
        <div className="w-28 h-28">
          <img
            className=" rounded-full object-cover"
            src="https://gravatar.com/avatar/e58c00bb45a80aff0bbe6c27c05e17d8?s=400&d=mp&r=x"
            alt="User Avatar"
          />
        </div>
        <h2 className="mt-2 font-medium">Username</h2>
      </div>

      {/* <!-- Navigation list --> */}
      <nav>
        <ul className="">
          {/* <!-- Add navigation list items here --> */}
          <li>
            <NavLink
              to={"overview"}
              className={({ isActive }) => {
                return "btn w-full mb-4 " + (isActive ? "btn-neutral" : "");
              }}
            >
              Overview
            </NavLink>
            <NavLink
              to={"tracks"}
              className={({ isActive }) => {
                return "btn w-full mb-4 " + (isActive ? "btn-neutral" : "");
              }}
            >
              Tracks
            </NavLink>
            <NavLink
              to={"trainees"}
              className={({ isActive }) => {
                return "btn w-full mb-4 " + (isActive ? "btn-neutral" : "");
              }}
            >
              Trainees
            </NavLink>
          </li>
          {/* <!-- More items... --> */}
        </ul>
      </nav>
    </aside>
  );
}
