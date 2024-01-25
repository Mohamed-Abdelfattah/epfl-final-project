import { NavLink } from "react-router-dom";
import ProfileInfo from "./ProfileInfo";

export default function Sidebar({ profileInfo }) {
  //
  const { role } = profileInfo;

  return (
    <>
      <div className="drawer-side z-40 divide-x-2 divide-x-reverse">
        <label
          htmlFor="drawer"
          className="drawer-overlay"
          aria-label="Close menu"
        ></label>
        <aside id="sidebar" className="bg-base-100 min-h-screen w-80 ">
          <ProfileInfo data={profileInfo} />

          <div className="divider divide-y-2 divide-y-reverse"></div>

          <ul className="menu px-4 py-0 ">
            <li>
              <NavLink
                // defaultChecked
                to={""}
                end
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
              {role === "trainer" ? (
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
              ) : (
                <></>
              )}
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}
