import { Link, useLoaderData } from "react-router-dom";
import { useSetPageTitle } from "../../../state/pageTitle/usePageTitle";
import TrackCard from "./TrackCard";

export async function loader() {
  const { data } = await fetch(
    `${import.meta.env.VITE_API_URL_NUM}/api/tracks`
  ).then((res) => res.json());

  return data;
}

export default function TracksList() {
  //
  useSetPageTitle();
  const tracksList = useLoaderData();
  console.log("@tracksList ---- loader ---- tracks =", tracksList);

  return (
    <section className="w-full flex flex-row flex-wrap">
      {tracksList.map((track) => (
        <TrackCard key={track.id} {...track} />
      ))}
      <Link to="/dashboard/tracks/add" className="btn btn-outline">
        Add Track
      </Link>
    </section>
  );
}
