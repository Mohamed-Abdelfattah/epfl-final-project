import React from "react";
import { useUserContext } from "../../../state/user/userContext";
import { Form, useFetcher } from "react-router-dom";

export default function TrackCard({
  id,
  title,
  description,
  trainers,
  trainees,
}) {
  //
  const { user } = useUserContext();
  const fetcher = useFetcher();
  const isEnrolled = isEnrolledInTrack(user.id, trainers, trainees);

  const buttonTextAdd = user.role === "trainee" ? "Enroll" : "Supervise";

  const buttonTextRemove =
    user.role === "trainee" ? "Leave Track" : "Stop Supervising";

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-2">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {user.role === "trainee" ? (
            <>
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("progress-modal").showModal()
                }
              >
                Update Progress
              </button>
              <dialog
                id="progress-modal"
                className="modal modal-bottom sm:modal-middle"
                onSubmit={(e) => {
                  const form = e.target;
                  const formData = new FormData(form);
                  console.log(formData);
                  const progress = formData.get("progress");
                  console.log(progress, typeof progress);
                  // update progress in the backend
                  fetcher;
                  form.reset();
                }}
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <form method="dialog">
                    <p className="py-4">
                      Enter the new progress percentage (numbers only, no
                      letters no signs, just the number without a % sign):
                    </p>
                    <input
                      className="input input-bordered w-full "
                      type="number"
                      name="progress"
                      placeholder="numbers only eg: 50, 60 etc, between 0 and 100"
                      min="0"
                      max="100"
                      required
                    />
                    <div className="modal-action">
                      <input
                        type="submit"
                        className="btn"
                        name="save"
                        value="Save"
                      />

                      <button
                        className="btn"
                        type="reset"
                        formNoValidate
                        onClick={() => {
                          document.getElementById("progress-modal").close();
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </>
          ) : (
            <button className="btn btn-primary" disabled>
              view Details
            </button>
          )}

          {!isEnrolled ? (
            <Form method="POST">
              <button
                type="submit"
                name="role"
                className="btn btn-outline"
                value={user.role}
              >
                {buttonTextAdd}
              </button>
              <input type="text" name="trackId" hidden value={id} />
              <input type="text" name="userId" hidden value={user.id} />
            </Form>
          ) : (
            <Form method="DELETE">
              <button
                type="submit"
                name="role"
                className="btn btn-outline"
                value={user.role}
              >
                {buttonTextRemove}
              </button>
              <input type="text" name="trackId" hidden value={id} />
              <input type="text" name="userId" hidden value={user.id} />
            </Form>
          )}
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
