import TraineeStats from "./TraineeStats";
export default function OverviewCard({ info, trainees_progress }) {
  //

  return (
    <div className="flex flex-col space-y-4 ring-1 ring-gray-300 p-4">
      <div className="flex flex-row justify-between items-center">
        <p className="font-bold text-4xl">{info.title}</p>
        <div
          className="radial-progress"
          style={{ "--value": info.progress_percentage, "--size": "4rem" }}
          role="progressbar"
        >
          {info.progress_percentage.toFixed(0)}%
        </div>
      </div>
      <div className="divider"></div>

      <div className="flex flex-row overflow-x-auto p-4">
        {trainees_progress.map((trainee) => (
          <div key={trainee.id} className=" w-fit shadow">
            <TraineeStats {...trainee} />
          </div>
        ))}
      </div>
    </div>
  );
}
