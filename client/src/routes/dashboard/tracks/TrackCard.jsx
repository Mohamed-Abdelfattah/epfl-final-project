import React from "react";
import { useUserContext } from "../../../state/user/userContext";
import { Form } from "react-router-dom";

export default function TrackCard({
  id,
  title,
  description,
  trainers,
  trainees,
}) {
  //
  const { user } = useUserContext();
  console.log("@TrackCard ----- user =", user);
  // different buttons should be rendered based on if the trainer/trainee enrolled or not in the track
  const isEnrolled = isEnrolledInTrack(user.id, trainers, trainees);
  const intentValue =
    user.role === "trainee"
      ? isEnrolled
        ? "unenroll"
        : "enroll"
      : isEnrolled
      ? "assign"
      : "unassign";

  const buttonText =
    user.role === "trainee"
      ? isEnrolled
        ? "Leave Track"
        : "Enroll"
      : isEnrolled
      ? "Stop Supervising"
      : "Supervise";

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-2">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" disabled>
            view Details
          </button>

          <Form>
            <button
              type="submit"
              name="intent"
              className="btn btn-outline"
              value={intentValue}
            >
              {buttonText}
            </button>
            <input type="text" name="trackId" hidden value={id} />
            <input type="text" name="userId" hidden value={user.id} />
          </Form>
        </div>
      </div>
    </div>
  );
}

function isEnrolledInTrack(userId, trainersList, traineesList) {
  //
  if (traineesList.includes(userId) || trainersList.includes(userId)) {
    return true;
  }
  return false;
}
