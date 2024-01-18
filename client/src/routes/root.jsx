import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <>
      <main className="flex h-full">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
