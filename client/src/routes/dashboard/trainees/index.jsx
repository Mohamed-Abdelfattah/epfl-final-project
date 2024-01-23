import { useLoaderData } from "react-router-dom";
import { useSetPageTitle } from "../../../state/pageTitle/usePageTitle";

export async function loader() {
  const { data } = await fetch(
    `${import.meta.env.VITE_API_URL_NUM}/api/trainees`
  ).then((res) => res.json());

  return data;
}

export default function TraineesList() {
  //
  useSetPageTitle();
  const traineesList = useLoaderData();

  return (
    <div>
      {traineesList.map((trainee) => (
        <p key={trainee.id}>{trainee.name}</p>
      ))}
    </div>
  );
}
