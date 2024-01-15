import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <a href="/login">login</a>
      <h1>Root layout</h1>
      <Outlet />
    </div>
  );
}
