import { Link, useLoaderData } from "react-router-dom";
import { useSetPageTitle } from "../../../state/pageTitle/usePageTitle";
import TrackCard from "./TrackCard";

export async function loader({ request, response }) {
  const { data } = await fetch(
    `${import.meta.env.VITE_API_URL_NUM}/api/tracks`
  ).then((res) => res.json());

  return data;
}

export async function action({ request, response }) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "enroll") {
    // enroll trainee, will be triggered by trainee from the tracks cards list
  }

  if (intent === "unassign") {
    // will delete the track, will be triggered by trainer from the tracks cards list or the details page
  }
}

export default function TracksList() {
  //
  useSetPageTitle();
  const tracksList = useLoaderData();

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
