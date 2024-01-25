import React from "react";

export default function TrackCard({ title, description }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-2">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" disabled>
            view Details
          </button>
        </div>
      </div>
    </div>
  );
}
