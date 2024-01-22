import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="drawer-side z-40">
      <label
        htmlFor="drawer"
        className="drawer-overlay"
        aria-label="Close menu"
      ></label>
      <aside id="sidebar" className="bg-base-100 min-h-screen w-80">
        <div className="bg-base-100 sticky top-0 z-20 items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur flex flex-col">
          <div className=" w-20 h-20 lg:w-28 lg:h-28 transition-all">
            <img
              className=" rounded-full object-cover"
              src="https://gravatar.com/avatar/e58c00bb45a80aff0bbe6c27c05e17d8?s=400&d=mp&r=x"
              alt="User Avatar"
            />
          </div>
          <h2 className="mt-2 mb-2 font-medium">{"{{Username}}"}</h2>
        </div>

        <ul className="menu px-4 py-0">
          <li>
            <NavLink
              to={"overview"}
              className={({ isActive }) => {
                return (
                  "group text-center pt-4 pb-4 justify-center text-base" +
                  " " +
                  (isActive ? "active" : "")
                );
              }}
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"tracks"}
              className={({ isActive }) => {
                return (
                  "group text-center pt-4 pb-4 justify-center text-base" +
                  " " +
                  (isActive ? "active" : "")
                );
              }}
            >
              Tracks
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"trainees"}
              className={({ isActive }) => {
                return (
                  "group text-center pt-4 pb-4 justify-center text-base" +
                  " " +
                  (isActive ? "active" : "")
                );
              }}
            >
              Trainees
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
}
