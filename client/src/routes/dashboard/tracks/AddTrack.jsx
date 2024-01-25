import { Form, useLoaderData, redirect, useActionData } from "react-router-dom";

export async function loader() {
  const { data: trainers } = await fetch(
    `${import.meta.env.VITE_API_URL_NUM}/api/trainers`
  ).then((res) => res.json());
  const { data: trainees } = await fetch(
    `${import.meta.env.VITE_API_URL_NUM}/api/trainees`
  ).then((res) => res.json());

  return { trainers, trainees };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log("@action ---- formData =", updates);
  const res = await fetch(`${import.meta.env.VITE_API_URL_NUM}/api/tracks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  }).then((res) => res.json());
  // if (!res.ok) {
  //   return { error: true };
  // }
  return redirect("/tracks");
}

export default function AddTrack() {
  //
  const { trainers, trainees } = useLoaderData();
  // const { error } = useActionData();

  return (
    <>
      {/* <div
        role="alert"
        className={`alert alert-error +${!error ? "hidden" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Something went wrong, try again later.</span>
      </div> */}

      <Form method="post" className="form-control w-full max-w-xs mx-auto">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="input input-bordered w-full max-w-xs"
          required
        />

        <label className="label">
          <span className="label-text">Start Time</span>
        </label>
        <input
          name="start_time"
          type="datetime-local"
          placeholder="Start Time"
          className="input input-bordered w-full max-w-xs"
          required
        />

        <label className="label">
          <span className="label-text">Duration Value</span>
        </label>
        <input
          name="duration_value"
          type="number"
          placeholder="Duration Value"
          className="input input-bordered w-full max-w-xs"
          required
        />

        <label className="label">
          <span className="label-text">Duration Unit</span>
        </label>
        <select
          name="duration_unit"
          className="select select-bordered w-full max-w-xs"
          required
        >
          <option value="hours">Hours</option>
          <option value="weeks">Weeks</option>
          <option value="days">Days</option>
          <option value="months">Months</option>
        </select>

        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          name="description"
          className="textarea textarea-bordered h-24"
          placeholder="Description..."
          required
        ></textarea>

        <fieldset className="mb-4">
          <legend className="label-text mb-2">Trainers:</legend>

          {trainers.map((trainer) => (
            <>
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="trainers"
                  value={trainer.id}
                />
                <span className="label-text ml-2">{trainer.name}</span>
              </label>
            </>
          ))}
        </fieldset>

        <fieldset className="mb-4">
          <legend className="label-text mb-2">Trainees</legend>

          {trainees.map((trainee) => (
            <>
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="trainees"
                  value={trainee.id}
                />
                <span className="label-text ml-2">{trainee.name}</span>
              </label>
            </>
          ))}
        </fieldset>

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </Form>
    </>
  );
}
