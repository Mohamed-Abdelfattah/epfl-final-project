import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  // fetch data upon first render
  useEffect(() => {
    console.log(document.cookie);
    fetch(`${import.meta.env.VITE_API_URL_NUM}/api/dashboard`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="drawer lg:drawer-open">
      <input type="checkbox" id="drawer" className="drawer-toggle" />
      <Sidebar />
      <div className="drawer-content">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
