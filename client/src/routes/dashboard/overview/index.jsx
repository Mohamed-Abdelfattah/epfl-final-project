import { useLoaderData } from "react-router-dom";
import { useSetPageTitle } from "../../../state/pageTitle/usePageTitle";
import OverviewCard from "./OverviewCard";

export async function loader() {
  const { data } = await fetch(
    `${import.meta.env.VITE_API_URL_NUM}/api/overview`
  ).then((res) => res.json());
  return data;
}

export default function Overview() {
  //

  useSetPageTitle();
  const data = useLoaderData();

  return (
    <div className="container mx-auto px-4 py-4">
      <section>
        <div className="overflow-y-auto h-[500px]">
          {data.map((item, i) => (
            <OverviewCard key={i} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
