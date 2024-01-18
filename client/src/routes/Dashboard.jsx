import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const [count, setCount] = useState(0);

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
    <>
      <Sidebar />
      <Header />
      <p>count is {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <h1 className="text-3xl font-bold text-blue-500">Dashboard</h1>
    </>
  );
}
