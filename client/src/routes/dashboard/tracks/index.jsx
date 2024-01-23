import { useLoaderData } from "react-router-dom";
import { useSetPageTitle } from "../../../state/pageTitle/usePageTitle";

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
    <div>
      {tracksList.map((track) => (
        <p key={track.id}>{track.title}</p>
      ))}
    </div>
  );
}
