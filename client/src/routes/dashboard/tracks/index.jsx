import { Link, useLoaderData, redirect } from "react-router-dom";
import { useSetPageTitle } from "../../../state/pageTitle/usePageTitle";
import TrackCard from "./TrackCard";
import { useUserContext } from "../../../state/user/userContext";

export async function loader({ request, response }) {
  const { data } = await fetch(
    `${import.meta.env.VITE_API_URL_NUM}/api/tracks`
  ).then((res) => res.json());

  return data;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const role = formData.get("role");
  const trackId = formData.get("trackId");
  const userId = formData.get("userId");
  const method = request.method;

  console.log(
    "@Tracks action ----- trackId =",
    trackId,
    "userId =",
    userId,
    "method =",
    method
  );

  const res = await fetch(
    `${import.meta.env.VITE_API_URL_NUM}/api/${trackId}/${role}/${userId}`,
    {
      method,
    }
  ).then((res) => res.json());
  console.log("@Tracks action ----- res =", res);

  return redirect("/dashboard/tracks");
}

export default function TracksList() {
  //
  useSetPageTitle();
  const { user } = useUserContext();
  const tracksList = useLoaderData();

  return (
    <section className="w-full flex flex-row flex-wrap">
      {tracksList.map((track) => (
        <TrackCard key={track.id} {...track} />
      ))}
      {user.role === "trainer" ? (
        <Link to="/dashboard/tracks/add" className="btn btn-outline">
          Add Track
        </Link>
      ) : (
        <></>
      )}
    </section>
  );
}
