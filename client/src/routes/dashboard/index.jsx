import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export async function loader() {
  const { data } = await fetch(
    `${import.meta.env.VITE_API_URL_NUM}/api/dashboard`
  ).then((res) => res.json());

  return data;
}

export default function Dashboard() {
  //
  const dashboardInfo = useLoaderData();

  return (
    <div className="drawer lg:drawer-open">
      <input type="checkbox" id="drawer" className="drawer-toggle" />
      <Sidebar profileInfo={dashboardInfo} />
      <div className="drawer-content ">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
