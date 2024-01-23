import { NavLink } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";

export default function Sidebar({ profileInfo }) {
  return (
    <div className="drawer-side z-40">
      <label
        htmlFor="drawer"
        className="drawer-overlay"
        aria-label="Close menu"
      ></label>
      <aside id="sidebar" className="bg-base-100 min-h-screen w-80">
        <ProfileInfo data={profileInfo} />

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
