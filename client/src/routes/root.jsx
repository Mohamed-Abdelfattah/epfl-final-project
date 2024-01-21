import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div data-theme="light" className="bg-gray-100">
        <div className="flex h-screen overflow-hidden">
          <Outlet />
        </div>
      </div>
    </>
  );
}
